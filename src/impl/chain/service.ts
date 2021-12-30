import { config } from "src/config";
import { Readable } from "stream";
import { EventData } from "web3-eth-contract";
import { Event, Subscriber } from "../event";
import { Impl, NodeInfo, SecretShareData, TaskInfo, TaskRoundInfo } from "../service";
import { ContractHelper } from "./contract";

export interface ContractOption {
  contractAddress: string;
  abiFile: string;
}

export interface ChainOption {
  nodeAddress: string;
  privateKey: string;
  provider: string;
  gasPrice: number;
  gasLimit: number;
  chainParam: {
    name?: string;
    chainId?: number;
  };

  identity: ContractOption;
  hfl: ContractOption;
}

class _Impl implements Impl {
  private subscriber = new Subscriber();

  private option!: ChainOption;
  private identityContract!: ContractHelper;
  private hflContract!: ContractHelper;

  private subscribeMap: Map<Readable, Readable> = new Map();

  async init(opt?: ChainOption): Promise<void> {
    this.option = opt || config.chain;

    const identityOption = {
      ...this.option.identity,
      nodeAddress: this.option.nodeAddress,
      privateKey: this.option.privateKey,
      provider: this.option.provider,
      gasPrice: this.option.gasPrice,
      gasLimit: this.option.gasLimit,
      chainParam: this.option.chainParam,
    };
    const hflOption = {
      ...this.option.hfl,
      nodeAddress: this.option.nodeAddress,
      privateKey: this.option.privateKey,
      provider: this.option.provider,
      gasPrice: this.option.gasPrice,
      gasLimit: this.option.gasLimit,
      chainParam: this.option.chainParam,
    };
    this.identityContract = new ContractHelper(identityOption);
    this.hflContract = new ContractHelper(hflOption);
    await this.identityContract.init();
    await this.hflContract.init();
  }

  subscribe(): Readable {
    const src = this.hflContract.subscribe();
    src.on("data", (event: EventData) => {
      const res = event.returnValues;
      let retEvent: Event;
      switch (event.event) {
        case "AggregateStarted":
          retEvent = {
            type: "AggregationStarted",
            taskID: res.taskId,
            round: Number(res.round),
            addrs: res.addrs,
          };
          this.subscriber.publish(retEvent);
          break;
        case "CalculateStarted":
          retEvent = {
            type: "CalculationStarted",
            taskID: res.taskId,
            round: Number(res.round),
            addrs: res.addrs,
          };
          this.subscriber.publish(retEvent);
          break;
        case "PartnerSelected":
          retEvent = {
            type: "PartnerSelected",
            taskID: res.taskId,
            round: Number(res.round),
            addrs: res.addrs,
          };
          this.subscriber.publish(retEvent);
          break;
        case "RoundEnd":
          retEvent = {
            type: "RoundEnded",
            taskID: res.taskId,
            round: Number(res.round),
          };
          this.subscriber.publish(retEvent);
          break;
        case "RoundStart":
          retEvent = {
            type: "RoundStarted",
            taskID: res.taskId,
            round: Number(res.round),
          };
          this.subscriber.publish(retEvent);
          break;
        case "TaskCreated":
          retEvent = {
            type: "TaskCreated",
            address: res.creator,
            taskID: res.taskId,
            dataset: res.dataSet,
            url: res.creatorUrl,
            commitment: res.commitment,
            taskType: res.taskType,
          };
          this.subscriber.publish(retEvent);
          break;
        case "TaskFinished":
          retEvent = {
            type: "TaskFinished",
            taskID: res.taskId,
          };
          this.subscriber.publish(retEvent);
          break;
      }
    });
    const res = this.subscriber.subscribe();
    this.subscribeMap.set(res, src);
    return res;
  }

  unsubscribe(stream: Readable): void {
    if (this.subscribeMap.has(stream)) {
      this.subscriber.unsubscribe(stream);
      const src = this.subscribeMap.get(stream);
      if (src) {
        this.hflContract.unsubscribe(src);
      }
    }
  }

  async join(url: string, name: string): Promise<string> {
    const recepit = await this.identityContract.method("join", [url, name]);
    const res = this.identityContract.decodeLogs(recepit.logs);
    if (!res) {
      throw new Error("join has no result");
    }
    return res.addr;
  }

  async updateUrl(address: string, url: string): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }
    await this.identityContract.method("updateUrl", [url]);
  }

  async updateName(address: string, name: string): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }
    await this.identityContract.method("updateName", [name]);
  }

  async leave(address: string): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }
    await this.identityContract.method("leave");
  }

  async getNodeInfo(address: string): Promise<NodeInfo> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    const res = await this.identityContract.call("getNodeInfo", [address]);
    if (typeof res === "string") {
      throw new Error("getNodeInfo return type error");
    }
    return {
      url: res.url,
      name: res.name,
    };
  }

  async createTask(address: string, dataset: string, commitment: string, taskType: string): Promise<string> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    const receipt = await this.hflContract.method("createTask", [dataset, commitment, taskType]);
    const res = this.hflContract.decodeLogs(receipt.logs);
    if (!res) {
      throw new Error("createTask has no result");
    }
    return res.taskId;
  }

  async finishTask(address: string, taskID: string): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("finishTask", [taskID]);
  }

  async getTask(taskID: string): Promise<TaskInfo> {
    const res = await this.hflContract.call("getTask", [taskID]);
    if (typeof res === "string") {
      throw new Error("getTask return type error");
    }

    return {
      address: res.creator,
      taskID: taskID,
      url: res.creatorUrl,
      dataset: res.dataSet,
      commitment: res.commitment,
      taskType: res.taskType,
      finished: Boolean(res.finished),
    };
  }

  async startRound(address: string, taskID: string, round: number): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("startRound", [taskID, round, 100, 1]);
  }

  async joinRound(address: string, taskID: string, round: number, pk1: string, pk2: string): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("joinRound", [taskID, round, pk1, pk2]);
  }

  async getTaskRound(taskID: string, round: number): Promise<TaskRoundInfo> {
    const res = await this.hflContract.call("getTaskRound", [taskID, round]);
    if (typeof res === "string") {
      throw new Error("getTaskRound return type error");
    }

    return {
      round: Number(res.currentRound),
      status: Number(res.status),
      clients: res.joinedAddrs,
    };
  }

  async selectCandidates(address: string, taskID: string, round: number, clients: string[]): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("selectCandidates", [taskID, round, clients]);
  }

  async uploadSeedCommitment(
    address: string,
    taskID: string,
    round: number,
    receivers: string[],
    commitments: string[]
  ): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("uploadSeedCommitment", [taskID, round, receivers, commitments]);
  }

  async uploadSecretKeyCommitment(
    address: string,
    taskID: string,
    round: number,
    receivers: string[],
    commitments: string[]
  ): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("uploadSecretKeyCommitment", [taskID, round, receivers, commitments]);
  }

  async getClientPublickKeys(taskID: string, round: number, clients: string[]): Promise<[string, string][]> {
    const res = await this.hflContract.call("getClientPublickeys", [taskID, round, clients]);
    if (typeof res === "string") {
      throw new Error("getClientPublickeys return type error");
    }

    return res.map((item: any) => [item.pk1, item.pk2]);
  }

  async startCalculation(address: string, taskID: string, round: number, clients: string[]): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("startCalculate", [taskID, round, clients]);
  }

  async uploadResultCommitment(
    address: string,
    taskID: string,
    round: number,
    commitment: string
  ): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("uploadResultCommitment", [taskID, round, commitment]);
  }

  async getResultCommitment(taskID: string, round: number, client: string): Promise<string> {
    const res = await this.hflContract.call("getResultCommitment", [taskID, client, round]);
    if (typeof res === "object") {
      throw new Error("getClientPublickeys return type error");
    }

    return res;
  }

  async startAggregation(address: string, taskID: string, round: number, clients: string[]): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("startAggregate", [taskID, round, clients]);
  }

  async uploadSeed(
    address: string,
    taskID: string,
    round: number,
    senders: string[],
    seeds: string[]
  ): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("uploadSeed", [taskID, round, senders, seeds]);
  }

  async uploadSecretKey(
    address: string,
    taskID: string,
    round: number,
    senders: string[],
    secretKeys: string[]
  ): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("uploadSecretkeyMask", [taskID, round, senders, secretKeys]);
  }

  async getSecretShareDatas(
    taskID: string,
    round: number,
    senders: string[],
    receiver: string
  ): Promise<SecretShareData[]> {
    const res = await this.hflContract.call("getSecretSharingDatas", [taskID, round, senders, receiver]);
    if (typeof res === "string") {
      throw new Error("getSecretShareDatas return type error");
    }

    return res.map((item: any) => {
      return {
        seed: item.seedPiece,
        seedCommitment: item.seedCommitment,
        secretKey: item.secretKeyPiece,
        secretKeyCommitment: item.secretKeyMaskCommitment,
      };
    });
  }

  async endRound(address: string, taskID: string, round: number): Promise<void> {
    if (address !== this.option.nodeAddress) {
      throw new Error(`chain connector node address is not ${address}`);
    }

    await this.hflContract.method("endRound", [taskID, round]);
  }
}

export const impl = new _Impl();
