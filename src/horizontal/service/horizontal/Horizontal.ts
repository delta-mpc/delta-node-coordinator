// Original file: src/proto/horizontal.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  AggregationReq as _horizontal_AggregationReq,
  AggregationReq__Output as _horizontal_AggregationReq__Output,
} from "../horizontal/AggregationReq";
import type {
  CalculationReq as _horizontal_CalculationReq,
  CalculationReq__Output as _horizontal_CalculationReq__Output,
} from "../horizontal/CalculationReq";
import type {
  CandidatesReq as _horizontal_CandidatesReq,
  CandidatesReq__Output as _horizontal_CandidatesReq__Output,
} from "../horizontal/CandidatesReq";
import type {
  CreateTaskReq as _horizontal_CreateTaskReq,
  CreateTaskReq__Output as _horizontal_CreateTaskReq__Output,
} from "../horizontal/CreateTaskReq";
import type {
  CreateTaskResp as _horizontal_CreateTaskResp,
  CreateTaskResp__Output as _horizontal_CreateTaskResp__Output,
} from "../horizontal/CreateTaskResp";
import type {
  EndRoundReq as _horizontal_EndRoundReq,
  EndRoundReq__Output as _horizontal_EndRoundReq__Output,
} from "../horizontal/EndRoundReq";
import type {
  Event as _horizontal_Event,
  Event__Output as _horizontal_Event__Output,
} from "../horizontal/Event";
import type {
  EventReq as _horizontal_EventReq,
  EventReq__Output as _horizontal_EventReq__Output,
} from "../horizontal/EventReq";
import type {
  FinishTaskReq as _horizontal_FinishTaskReq,
  FinishTaskReq__Output as _horizontal_FinishTaskReq__Output,
} from "../horizontal/FinishTaskReq";
import type {
  JoinReq as _horizontal_JoinReq,
  JoinReq__Output as _horizontal_JoinReq__Output,
} from "../horizontal/JoinReq";
import type {
  JoinResp as _horizontal_JoinResp,
  JoinResp__Output as _horizontal_JoinResp__Output,
} from "../horizontal/JoinResp";
import type {
  JoinRoundReq as _horizontal_JoinRoundReq,
  JoinRoundReq__Output as _horizontal_JoinRoundReq__Output,
} from "../horizontal/JoinRoundReq";
import type {
  LeaveReq as _horizontal_LeaveReq,
  LeaveReq__Output as _horizontal_LeaveReq__Output,
} from "../horizontal/LeaveReq";
import type {
  NodeInfo as _horizontal_NodeInfo,
  NodeInfo__Output as _horizontal_NodeInfo__Output,
} from "../horizontal/NodeInfo";
import type {
  NodeInfoReq as _horizontal_NodeInfoReq,
  NodeInfoReq__Output as _horizontal_NodeInfoReq__Output,
} from "../horizontal/NodeInfoReq";
import type {
  NodeInfos as _horizontal_NodeInfos,
  NodeInfos__Output as _horizontal_NodeInfos__Output,
} from "../horizontal/NodeInfos";
import type {
  NodeInfosReq as _horizontal_NodeInfosReq,
  NodeInfosReq__Output as _horizontal_NodeInfosReq__Output,
} from "../horizontal/NodeInfosReq";
import type {
  PublicKeyReq as _horizontal_PublicKeyReq,
  PublicKeyReq__Output as _horizontal_PublicKeyReq__Output,
} from "../horizontal/PublicKeyReq";
import type {
  PublicKeyResp as _horizontal_PublicKeyResp,
  PublicKeyResp__Output as _horizontal_PublicKeyResp__Output,
} from "../horizontal/PublicKeyResp";
import type {
  ResultCommitment as _horizontal_ResultCommitment,
  ResultCommitment__Output as _horizontal_ResultCommitment__Output,
} from "../horizontal/ResultCommitment";
import type {
  ResultCommitmentReq as _horizontal_ResultCommitmentReq,
  ResultCommitmentReq__Output as _horizontal_ResultCommitmentReq__Output,
} from "../horizontal/ResultCommitmentReq";
import type {
  ResultCommitmentResp as _horizontal_ResultCommitmentResp,
  ResultCommitmentResp__Output as _horizontal_ResultCommitmentResp__Output,
} from "../horizontal/ResultCommitmentResp";
import type {
  SecretShareReq as _horizontal_SecretShareReq,
  SecretShareReq__Output as _horizontal_SecretShareReq__Output,
} from "../horizontal/SecretShareReq";
import type {
  SecretShareResp as _horizontal_SecretShareResp,
  SecretShareResp__Output as _horizontal_SecretShareResp__Output,
} from "../horizontal/SecretShareResp";
import type {
  Share as _horizontal_Share,
  Share__Output as _horizontal_Share__Output,
} from "../horizontal/Share";
import type {
  ShareCommitment as _horizontal_ShareCommitment,
  ShareCommitment__Output as _horizontal_ShareCommitment__Output,
} from "../horizontal/ShareCommitment";
import type {
  StartRoundReq as _horizontal_StartRoundReq,
  StartRoundReq__Output as _horizontal_StartRoundReq__Output,
} from "../horizontal/StartRoundReq";
import type {
  TaskReq as _horizontal_TaskReq,
  TaskReq__Output as _horizontal_TaskReq__Output,
} from "../horizontal/TaskReq";
import type {
  TaskResp as _horizontal_TaskResp,
  TaskResp__Output as _horizontal_TaskResp__Output,
} from "../horizontal/TaskResp";
import type {
  TaskRoundReq as _horizontal_TaskRoundReq,
  TaskRoundReq__Output as _horizontal_TaskRoundReq__Output,
} from "../horizontal/TaskRoundReq";
import type {
  TaskRoundResp as _horizontal_TaskRoundResp,
  TaskRoundResp__Output as _horizontal_TaskRoundResp__Output,
} from "../horizontal/TaskRoundResp";
import type {
  Transaction as _horizontal_Transaction,
  Transaction__Output as _horizontal_Transaction__Output,
} from "../horizontal/Transaction";
import type {
  UpdateNameReq as _horizontal_UpdateNameReq,
  UpdateNameReq__Output as _horizontal_UpdateNameReq__Output,
} from "../horizontal/UpdateNameReq";
import type {
  UpdateUrlReq as _horizontal_UpdateUrlReq,
  UpdateUrlReq__Output as _horizontal_UpdateUrlReq__Output,
} from "../horizontal/UpdateUrlReq";

export interface HorizontalClient extends grpc.Client {
  CreateTask(
    argument: _horizontal_CreateTaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  CreateTask(
    argument: _horizontal_CreateTaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  CreateTask(
    argument: _horizontal_CreateTaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  CreateTask(
    argument: _horizontal_CreateTaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  createTask(
    argument: _horizontal_CreateTaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  createTask(
    argument: _horizontal_CreateTaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  createTask(
    argument: _horizontal_CreateTaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  createTask(
    argument: _horizontal_CreateTaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_CreateTaskResp__Output) => void
  ): grpc.ClientUnaryCall;

  EndRound(
    argument: _horizontal_EndRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  EndRound(
    argument: _horizontal_EndRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  EndRound(
    argument: _horizontal_EndRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  EndRound(
    argument: _horizontal_EndRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  endRound(
    argument: _horizontal_EndRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  endRound(
    argument: _horizontal_EndRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  endRound(
    argument: _horizontal_EndRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  endRound(
    argument: _horizontal_EndRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  FinishTask(
    argument: _horizontal_FinishTaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  FinishTask(
    argument: _horizontal_FinishTaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  FinishTask(
    argument: _horizontal_FinishTaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  FinishTask(
    argument: _horizontal_FinishTaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  finishTask(
    argument: _horizontal_FinishTaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  finishTask(
    argument: _horizontal_FinishTaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  finishTask(
    argument: _horizontal_FinishTaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  finishTask(
    argument: _horizontal_FinishTaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  GetClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  getClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  getClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  getClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;
  getClientPublickKeys(
    argument: _horizontal_PublicKeyReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_PublicKeyResp__Output) => void
  ): grpc.ClientUnaryCall;

  GetNodeInfo(
    argument: _horizontal_NodeInfoReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodeInfo(
    argument: _horizontal_NodeInfoReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodeInfo(
    argument: _horizontal_NodeInfoReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodeInfo(
    argument: _horizontal_NodeInfoReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: _horizontal_NodeInfoReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: _horizontal_NodeInfoReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: _horizontal_NodeInfoReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: _horizontal_NodeInfoReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfo__Output) => void
  ): grpc.ClientUnaryCall;

  GetNodes(
    argument: _horizontal_NodeInfosReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodes(
    argument: _horizontal_NodeInfosReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodes(
    argument: _horizontal_NodeInfosReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  GetNodes(
    argument: _horizontal_NodeInfosReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  getNodes(
    argument: _horizontal_NodeInfosReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  getNodes(
    argument: _horizontal_NodeInfosReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  getNodes(
    argument: _horizontal_NodeInfosReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;
  getNodes(
    argument: _horizontal_NodeInfosReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_NodeInfos__Output) => void
  ): grpc.ClientUnaryCall;

  GetResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  getResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  getResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  getResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;
  getResultCommitment(
    argument: _horizontal_ResultCommitmentReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_ResultCommitmentResp__Output) => void
  ): grpc.ClientUnaryCall;

  GetSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  getSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  getSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  getSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;
  getSecretShareDatas(
    argument: _horizontal_SecretShareReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_SecretShareResp__Output) => void
  ): grpc.ClientUnaryCall;

  GetTask(
    argument: _horizontal_TaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _horizontal_TaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _horizontal_TaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _horizontal_TaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _horizontal_TaskReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _horizontal_TaskReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _horizontal_TaskReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _horizontal_TaskReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskResp__Output) => void
  ): grpc.ClientUnaryCall;

  GetTaskRound(
    argument: _horizontal_TaskRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTaskRound(
    argument: _horizontal_TaskRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTaskRound(
    argument: _horizontal_TaskRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  GetTaskRound(
    argument: _horizontal_TaskRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTaskRound(
    argument: _horizontal_TaskRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTaskRound(
    argument: _horizontal_TaskRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTaskRound(
    argument: _horizontal_TaskRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;
  getTaskRound(
    argument: _horizontal_TaskRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_TaskRoundResp__Output) => void
  ): grpc.ClientUnaryCall;

  Join(
    argument: _horizontal_JoinReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  Join(
    argument: _horizontal_JoinReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  Join(
    argument: _horizontal_JoinReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  Join(
    argument: _horizontal_JoinReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  join(
    argument: _horizontal_JoinReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  join(
    argument: _horizontal_JoinReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  join(
    argument: _horizontal_JoinReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;
  join(
    argument: _horizontal_JoinReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_JoinResp__Output) => void
  ): grpc.ClientUnaryCall;

  JoinRound(
    argument: _horizontal_JoinRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  JoinRound(
    argument: _horizontal_JoinRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  JoinRound(
    argument: _horizontal_JoinRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  JoinRound(
    argument: _horizontal_JoinRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  joinRound(
    argument: _horizontal_JoinRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  joinRound(
    argument: _horizontal_JoinRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  joinRound(
    argument: _horizontal_JoinRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  joinRound(
    argument: _horizontal_JoinRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  Leave(
    argument: _horizontal_LeaveReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  Leave(
    argument: _horizontal_LeaveReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  Leave(
    argument: _horizontal_LeaveReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  Leave(
    argument: _horizontal_LeaveReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  leave(
    argument: _horizontal_LeaveReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  leave(
    argument: _horizontal_LeaveReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  leave(
    argument: _horizontal_LeaveReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  leave(
    argument: _horizontal_LeaveReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  SelectCandidates(
    argument: _horizontal_CandidatesReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  SelectCandidates(
    argument: _horizontal_CandidatesReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  SelectCandidates(
    argument: _horizontal_CandidatesReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  SelectCandidates(
    argument: _horizontal_CandidatesReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  selectCandidates(
    argument: _horizontal_CandidatesReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  selectCandidates(
    argument: _horizontal_CandidatesReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  selectCandidates(
    argument: _horizontal_CandidatesReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  selectCandidates(
    argument: _horizontal_CandidatesReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  StartAggregation(
    argument: _horizontal_AggregationReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartAggregation(
    argument: _horizontal_AggregationReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartAggregation(
    argument: _horizontal_AggregationReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartAggregation(
    argument: _horizontal_AggregationReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startAggregation(
    argument: _horizontal_AggregationReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startAggregation(
    argument: _horizontal_AggregationReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startAggregation(
    argument: _horizontal_AggregationReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startAggregation(
    argument: _horizontal_AggregationReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  StartCalculation(
    argument: _horizontal_CalculationReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartCalculation(
    argument: _horizontal_CalculationReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartCalculation(
    argument: _horizontal_CalculationReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartCalculation(
    argument: _horizontal_CalculationReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startCalculation(
    argument: _horizontal_CalculationReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startCalculation(
    argument: _horizontal_CalculationReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startCalculation(
    argument: _horizontal_CalculationReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startCalculation(
    argument: _horizontal_CalculationReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  StartRound(
    argument: _horizontal_StartRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartRound(
    argument: _horizontal_StartRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartRound(
    argument: _horizontal_StartRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  StartRound(
    argument: _horizontal_StartRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startRound(
    argument: _horizontal_StartRoundReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startRound(
    argument: _horizontal_StartRoundReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startRound(
    argument: _horizontal_StartRoundReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  startRound(
    argument: _horizontal_StartRoundReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  Subscribe(
    argument: _horizontal_EventReq,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_horizontal_Event__Output>;
  Subscribe(
    argument: _horizontal_EventReq,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_horizontal_Event__Output>;
  subscribe(
    argument: _horizontal_EventReq,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_horizontal_Event__Output>;
  subscribe(
    argument: _horizontal_EventReq,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_horizontal_Event__Output>;

  UpdateName(
    argument: _horizontal_UpdateNameReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateName(
    argument: _horizontal_UpdateNameReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateName(
    argument: _horizontal_UpdateNameReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateName(
    argument: _horizontal_UpdateNameReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateName(
    argument: _horizontal_UpdateNameReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateName(
    argument: _horizontal_UpdateNameReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateName(
    argument: _horizontal_UpdateNameReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateName(
    argument: _horizontal_UpdateNameReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UpdateUrl(
    argument: _horizontal_UpdateUrlReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateUrl(
    argument: _horizontal_UpdateUrlReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateUrl(
    argument: _horizontal_UpdateUrlReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UpdateUrl(
    argument: _horizontal_UpdateUrlReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateUrl(
    argument: _horizontal_UpdateUrlReq,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateUrl(
    argument: _horizontal_UpdateUrlReq,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateUrl(
    argument: _horizontal_UpdateUrlReq,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  updateUrl(
    argument: _horizontal_UpdateUrlReq,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadResultCommitment(
    argument: _horizontal_ResultCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UploadSecretKey(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKey(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKey(
    argument: _horizontal_Share,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKey(
    argument: _horizontal_Share,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKey(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKey(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKey(
    argument: _horizontal_Share,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKey(
    argument: _horizontal_Share,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSecretKeyCommitment(
    argument: _horizontal_ShareCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UploadSeed(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeed(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeed(
    argument: _horizontal_Share,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeed(
    argument: _horizontal_Share,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeed(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeed(
    argument: _horizontal_Share,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeed(
    argument: _horizontal_Share,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeed(
    argument: _horizontal_Share,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;

  UploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  UploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
  uploadSeedCommitment(
    argument: _horizontal_ShareCommitment,
    callback: (error?: grpc.ServiceError, result?: _horizontal_Transaction__Output) => void
  ): grpc.ClientUnaryCall;
}

export interface HorizontalHandlers extends grpc.UntypedServiceImplementation {
  CreateTask: grpc.handleUnaryCall<_horizontal_CreateTaskReq__Output, _horizontal_CreateTaskResp>;

  EndRound: grpc.handleUnaryCall<_horizontal_EndRoundReq__Output, _horizontal_Transaction>;

  FinishTask: grpc.handleUnaryCall<_horizontal_FinishTaskReq__Output, _horizontal_Transaction>;

  GetClientPublickKeys: grpc.handleUnaryCall<_horizontal_PublicKeyReq__Output, _horizontal_PublicKeyResp>;

  GetNodeInfo: grpc.handleUnaryCall<_horizontal_NodeInfoReq__Output, _horizontal_NodeInfo>;

  GetNodes: grpc.handleUnaryCall<_horizontal_NodeInfosReq__Output, _horizontal_NodeInfos>;

  GetResultCommitment: grpc.handleUnaryCall<
    _horizontal_ResultCommitmentReq__Output,
    _horizontal_ResultCommitmentResp
  >;

  GetSecretShareDatas: grpc.handleUnaryCall<_horizontal_SecretShareReq__Output, _horizontal_SecretShareResp>;

  GetTask: grpc.handleUnaryCall<_horizontal_TaskReq__Output, _horizontal_TaskResp>;

  GetTaskRound: grpc.handleUnaryCall<_horizontal_TaskRoundReq__Output, _horizontal_TaskRoundResp>;

  Join: grpc.handleUnaryCall<_horizontal_JoinReq__Output, _horizontal_JoinResp>;

  JoinRound: grpc.handleUnaryCall<_horizontal_JoinRoundReq__Output, _horizontal_Transaction>;

  Leave: grpc.handleUnaryCall<_horizontal_LeaveReq__Output, _horizontal_Transaction>;

  SelectCandidates: grpc.handleUnaryCall<_horizontal_CandidatesReq__Output, _horizontal_Transaction>;

  StartAggregation: grpc.handleUnaryCall<_horizontal_AggregationReq__Output, _horizontal_Transaction>;

  StartCalculation: grpc.handleUnaryCall<_horizontal_CalculationReq__Output, _horizontal_Transaction>;

  StartRound: grpc.handleUnaryCall<_horizontal_StartRoundReq__Output, _horizontal_Transaction>;

  Subscribe: grpc.handleServerStreamingCall<_horizontal_EventReq__Output, _horizontal_Event>;

  UpdateName: grpc.handleUnaryCall<_horizontal_UpdateNameReq__Output, _horizontal_Transaction>;

  UpdateUrl: grpc.handleUnaryCall<_horizontal_UpdateUrlReq__Output, _horizontal_Transaction>;

  UploadResultCommitment: grpc.handleUnaryCall<_horizontal_ResultCommitment__Output, _horizontal_Transaction>;

  UploadSecretKey: grpc.handleUnaryCall<_horizontal_Share__Output, _horizontal_Transaction>;

  UploadSecretKeyCommitment: grpc.handleUnaryCall<
    _horizontal_ShareCommitment__Output,
    _horizontal_Transaction
  >;

  UploadSeed: grpc.handleUnaryCall<_horizontal_Share__Output, _horizontal_Transaction>;

  UploadSeedCommitment: grpc.handleUnaryCall<_horizontal_ShareCommitment__Output, _horizontal_Transaction>;
}

export interface HorizontalDefinition extends grpc.ServiceDefinition {
  CreateTask: MethodDefinition<
    _horizontal_CreateTaskReq,
    _horizontal_CreateTaskResp,
    _horizontal_CreateTaskReq__Output,
    _horizontal_CreateTaskResp__Output
  >;
  EndRound: MethodDefinition<
    _horizontal_EndRoundReq,
    _horizontal_Transaction,
    _horizontal_EndRoundReq__Output,
    _horizontal_Transaction__Output
  >;
  FinishTask: MethodDefinition<
    _horizontal_FinishTaskReq,
    _horizontal_Transaction,
    _horizontal_FinishTaskReq__Output,
    _horizontal_Transaction__Output
  >;
  GetClientPublickKeys: MethodDefinition<
    _horizontal_PublicKeyReq,
    _horizontal_PublicKeyResp,
    _horizontal_PublicKeyReq__Output,
    _horizontal_PublicKeyResp__Output
  >;
  GetNodeInfo: MethodDefinition<
    _horizontal_NodeInfoReq,
    _horizontal_NodeInfo,
    _horizontal_NodeInfoReq__Output,
    _horizontal_NodeInfo__Output
  >;
  GetNodes: MethodDefinition<
    _horizontal_NodeInfosReq,
    _horizontal_NodeInfos,
    _horizontal_NodeInfosReq__Output,
    _horizontal_NodeInfos__Output
  >;
  GetResultCommitment: MethodDefinition<
    _horizontal_ResultCommitmentReq,
    _horizontal_ResultCommitmentResp,
    _horizontal_ResultCommitmentReq__Output,
    _horizontal_ResultCommitmentResp__Output
  >;
  GetSecretShareDatas: MethodDefinition<
    _horizontal_SecretShareReq,
    _horizontal_SecretShareResp,
    _horizontal_SecretShareReq__Output,
    _horizontal_SecretShareResp__Output
  >;
  GetTask: MethodDefinition<
    _horizontal_TaskReq,
    _horizontal_TaskResp,
    _horizontal_TaskReq__Output,
    _horizontal_TaskResp__Output
  >;
  GetTaskRound: MethodDefinition<
    _horizontal_TaskRoundReq,
    _horizontal_TaskRoundResp,
    _horizontal_TaskRoundReq__Output,
    _horizontal_TaskRoundResp__Output
  >;
  Join: MethodDefinition<
    _horizontal_JoinReq,
    _horizontal_JoinResp,
    _horizontal_JoinReq__Output,
    _horizontal_JoinResp__Output
  >;
  JoinRound: MethodDefinition<
    _horizontal_JoinRoundReq,
    _horizontal_Transaction,
    _horizontal_JoinRoundReq__Output,
    _horizontal_Transaction__Output
  >;
  Leave: MethodDefinition<
    _horizontal_LeaveReq,
    _horizontal_Transaction,
    _horizontal_LeaveReq__Output,
    _horizontal_Transaction__Output
  >;
  SelectCandidates: MethodDefinition<
    _horizontal_CandidatesReq,
    _horizontal_Transaction,
    _horizontal_CandidatesReq__Output,
    _horizontal_Transaction__Output
  >;
  StartAggregation: MethodDefinition<
    _horizontal_AggregationReq,
    _horizontal_Transaction,
    _horizontal_AggregationReq__Output,
    _horizontal_Transaction__Output
  >;
  StartCalculation: MethodDefinition<
    _horizontal_CalculationReq,
    _horizontal_Transaction,
    _horizontal_CalculationReq__Output,
    _horizontal_Transaction__Output
  >;
  StartRound: MethodDefinition<
    _horizontal_StartRoundReq,
    _horizontal_Transaction,
    _horizontal_StartRoundReq__Output,
    _horizontal_Transaction__Output
  >;
  Subscribe: MethodDefinition<
    _horizontal_EventReq,
    _horizontal_Event,
    _horizontal_EventReq__Output,
    _horizontal_Event__Output
  >;
  UpdateName: MethodDefinition<
    _horizontal_UpdateNameReq,
    _horizontal_Transaction,
    _horizontal_UpdateNameReq__Output,
    _horizontal_Transaction__Output
  >;
  UpdateUrl: MethodDefinition<
    _horizontal_UpdateUrlReq,
    _horizontal_Transaction,
    _horizontal_UpdateUrlReq__Output,
    _horizontal_Transaction__Output
  >;
  UploadResultCommitment: MethodDefinition<
    _horizontal_ResultCommitment,
    _horizontal_Transaction,
    _horizontal_ResultCommitment__Output,
    _horizontal_Transaction__Output
  >;
  UploadSecretKey: MethodDefinition<
    _horizontal_Share,
    _horizontal_Transaction,
    _horizontal_Share__Output,
    _horizontal_Transaction__Output
  >;
  UploadSecretKeyCommitment: MethodDefinition<
    _horizontal_ShareCommitment,
    _horizontal_Transaction,
    _horizontal_ShareCommitment__Output,
    _horizontal_Transaction__Output
  >;
  UploadSeed: MethodDefinition<
    _horizontal_Share,
    _horizontal_Transaction,
    _horizontal_Share__Output,
    _horizontal_Transaction__Output
  >;
  UploadSeedCommitment: MethodDefinition<
    _horizontal_ShareCommitment,
    _horizontal_Transaction,
    _horizontal_ShareCommitment__Output,
    _horizontal_Transaction__Output
  >;
}