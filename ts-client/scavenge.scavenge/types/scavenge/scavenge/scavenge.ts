/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "scavenge.scavenge";

export interface Scavenge {
  index: string;
  solutionHash: string;
  solution: string;
  description: string;
  reward: string;
  scavenger: string;
}

function createBaseScavenge(): Scavenge {
  return { index: "", solutionHash: "", solution: "", description: "", reward: "", scavenger: "" };
}

export const Scavenge = {
  encode(message: Scavenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.solutionHash !== "") {
      writer.uint32(18).string(message.solutionHash);
    }
    if (message.solution !== "") {
      writer.uint32(26).string(message.solution);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.reward !== "") {
      writer.uint32(42).string(message.reward);
    }
    if (message.scavenger !== "") {
      writer.uint32(50).string(message.scavenger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scavenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScavenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.solutionHash = reader.string();
          break;
        case 3:
          message.solution = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.reward = reader.string();
          break;
        case 6:
          message.scavenger = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Scavenge {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      solutionHash: isSet(object.solutionHash) ? String(object.solutionHash) : "",
      solution: isSet(object.solution) ? String(object.solution) : "",
      description: isSet(object.description) ? String(object.description) : "",
      reward: isSet(object.reward) ? String(object.reward) : "",
      scavenger: isSet(object.scavenger) ? String(object.scavenger) : "",
    };
  },

  toJSON(message: Scavenge): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
    message.solution !== undefined && (obj.solution = message.solution);
    message.description !== undefined && (obj.description = message.description);
    message.reward !== undefined && (obj.reward = message.reward);
    message.scavenger !== undefined && (obj.scavenger = message.scavenger);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Scavenge>, I>>(object: I): Scavenge {
    const message = createBaseScavenge();
    message.index = object.index ?? "";
    message.solutionHash = object.solutionHash ?? "";
    message.solution = object.solution ?? "";
    message.description = object.description ?? "";
    message.reward = object.reward ?? "";
    message.scavenger = object.scavenger ?? "";
    return message;
  },
};

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
