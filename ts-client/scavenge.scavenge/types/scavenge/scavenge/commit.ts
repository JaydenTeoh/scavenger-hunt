/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "scavenge.scavenge";

export interface Commit {
  index: string;
  solutionHash: string;
  solutionScavengerHash: string;
}

function createBaseCommit(): Commit {
  return { index: "", solutionHash: "", solutionScavengerHash: "" };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.solutionHash !== "") {
      writer.uint32(18).string(message.solutionHash);
    }
    if (message.solutionScavengerHash !== "") {
      writer.uint32(26).string(message.solutionScavengerHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
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
          message.solutionScavengerHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commit {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      solutionHash: isSet(object.solutionHash) ? String(object.solutionHash) : "",
      solutionScavengerHash: isSet(object.solutionScavengerHash) ? String(object.solutionScavengerHash) : "",
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
    message.solutionScavengerHash !== undefined && (obj.solutionScavengerHash = message.solutionScavengerHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit {
    const message = createBaseCommit();
    message.index = object.index ?? "";
    message.solutionHash = object.solutionHash ?? "";
    message.solutionScavengerHash = object.solutionScavengerHash ?? "";
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
