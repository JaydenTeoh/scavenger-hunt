/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "scavenge.scavenge";

export interface MsgSubmitScavenge {
  creator: string;
  solutionHash: string;
  description: string;
  reward: string;
}

export interface MsgSubmitScavengeResponse {
}

export interface MsgCommitSolution {
  creator: string;
  solutionHash: string;
  solutionScavengerHash: string;
}

export interface MsgCommitSolutionResponse {
}

export interface MsgRevealSolution {
  creator: string;
  solution: string;
}

export interface MsgRevealSolutionResponse {
}

function createBaseMsgSubmitScavenge(): MsgSubmitScavenge {
  return { creator: "", solutionHash: "", description: "", reward: "" };
}

export const MsgSubmitScavenge = {
  encode(message: MsgSubmitScavenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.solutionHash !== "") {
      writer.uint32(18).string(message.solutionHash);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.reward !== "") {
      writer.uint32(34).string(message.reward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitScavenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitScavenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.solutionHash = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.reward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitScavenge {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      solutionHash: isSet(object.solutionHash) ? String(object.solutionHash) : "",
      description: isSet(object.description) ? String(object.description) : "",
      reward: isSet(object.reward) ? String(object.reward) : "",
    };
  },

  toJSON(message: MsgSubmitScavenge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
    message.description !== undefined && (obj.description = message.description);
    message.reward !== undefined && (obj.reward = message.reward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitScavenge>, I>>(object: I): MsgSubmitScavenge {
    const message = createBaseMsgSubmitScavenge();
    message.creator = object.creator ?? "";
    message.solutionHash = object.solutionHash ?? "";
    message.description = object.description ?? "";
    message.reward = object.reward ?? "";
    return message;
  },
};

function createBaseMsgSubmitScavengeResponse(): MsgSubmitScavengeResponse {
  return {};
}

export const MsgSubmitScavengeResponse = {
  encode(_: MsgSubmitScavengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitScavengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitScavengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitScavengeResponse {
    return {};
  },

  toJSON(_: MsgSubmitScavengeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitScavengeResponse>, I>>(_: I): MsgSubmitScavengeResponse {
    const message = createBaseMsgSubmitScavengeResponse();
    return message;
  },
};

function createBaseMsgCommitSolution(): MsgCommitSolution {
  return { creator: "", solutionHash: "", solutionScavengerHash: "" };
}

export const MsgCommitSolution = {
  encode(message: MsgCommitSolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.solutionHash !== "") {
      writer.uint32(18).string(message.solutionHash);
    }
    if (message.solutionScavengerHash !== "") {
      writer.uint32(26).string(message.solutionScavengerHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitSolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.solutionHash = reader.string();
          break;
        case 3:
          message.solutionScavengerHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommitSolution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      solutionHash: isSet(object.solutionHash) ? String(object.solutionHash) : "",
      solutionScavengerHash: isSet(object.solutionScavengerHash) ? String(object.solutionScavengerHash) : "",
    };
  },

  toJSON(message: MsgCommitSolution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
    message.solutionScavengerHash !== undefined && (obj.solutionScavengerHash = message.solutionScavengerHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommitSolution>, I>>(object: I): MsgCommitSolution {
    const message = createBaseMsgCommitSolution();
    message.creator = object.creator ?? "";
    message.solutionHash = object.solutionHash ?? "";
    message.solutionScavengerHash = object.solutionScavengerHash ?? "";
    return message;
  },
};

function createBaseMsgCommitSolutionResponse(): MsgCommitSolutionResponse {
  return {};
}

export const MsgCommitSolutionResponse = {
  encode(_: MsgCommitSolutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCommitSolutionResponse {
    return {};
  },

  toJSON(_: MsgCommitSolutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCommitSolutionResponse>, I>>(_: I): MsgCommitSolutionResponse {
    const message = createBaseMsgCommitSolutionResponse();
    return message;
  },
};

function createBaseMsgRevealSolution(): MsgRevealSolution {
  return { creator: "", solution: "" };
}

export const MsgRevealSolution = {
  encode(message: MsgRevealSolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.solution !== "") {
      writer.uint32(18).string(message.solution);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevealSolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.solution = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevealSolution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      solution: isSet(object.solution) ? String(object.solution) : "",
    };
  },

  toJSON(message: MsgRevealSolution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.solution !== undefined && (obj.solution = message.solution);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevealSolution>, I>>(object: I): MsgRevealSolution {
    const message = createBaseMsgRevealSolution();
    message.creator = object.creator ?? "";
    message.solution = object.solution ?? "";
    return message;
  },
};

function createBaseMsgRevealSolutionResponse(): MsgRevealSolutionResponse {
  return {};
}

export const MsgRevealSolutionResponse = {
  encode(_: MsgRevealSolutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevealSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRevealSolutionResponse {
    return {};
  },

  toJSON(_: MsgRevealSolutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevealSolutionResponse>, I>>(_: I): MsgRevealSolutionResponse {
    const message = createBaseMsgRevealSolutionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
  CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitScavenge = this.SubmitScavenge.bind(this);
    this.CommitSolution = this.CommitSolution.bind(this);
    this.RevealSolution = this.RevealSolution.bind(this);
  }
  SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse> {
    const data = MsgSubmitScavenge.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Msg", "SubmitScavenge", data);
    return promise.then((data) => MsgSubmitScavengeResponse.decode(new _m0.Reader(data)));
  }

  CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse> {
    const data = MsgCommitSolution.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Msg", "CommitSolution", data);
    return promise.then((data) => MsgCommitSolutionResponse.decode(new _m0.Reader(data)));
  }

  RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse> {
    const data = MsgRevealSolution.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Msg", "RevealSolution", data);
    return promise.then((data) => MsgRevealSolutionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
