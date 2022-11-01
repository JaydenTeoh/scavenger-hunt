/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Commit } from "./commit";
import { Params } from "./params";
import { Scavenge } from "./scavenge";

export const protobufPackage = "scavenge.scavenge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetScavengeRequest {
  index: string;
}

export interface QueryGetScavengeResponse {
  scavenge: Scavenge | undefined;
}

export interface QueryAllScavengeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllScavengeResponse {
  scavenge: Scavenge[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommitRequest {
  index: string;
}

export interface QueryGetCommitResponse {
  commit: Commit | undefined;
}

export interface QueryAllCommitRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommitResponse {
  commit: Commit[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetScavengeRequest(): QueryGetScavengeRequest {
  return { index: "" };
}

export const QueryGetScavengeRequest = {
  encode(message: QueryGetScavengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScavengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScavengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScavengeRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetScavengeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScavengeRequest>, I>>(object: I): QueryGetScavengeRequest {
    const message = createBaseQueryGetScavengeRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetScavengeResponse(): QueryGetScavengeResponse {
  return { scavenge: undefined };
}

export const QueryGetScavengeResponse = {
  encode(message: QueryGetScavengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scavenge !== undefined) {
      Scavenge.encode(message.scavenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScavengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScavengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scavenge = Scavenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScavengeResponse {
    return { scavenge: isSet(object.scavenge) ? Scavenge.fromJSON(object.scavenge) : undefined };
  },

  toJSON(message: QueryGetScavengeResponse): unknown {
    const obj: any = {};
    message.scavenge !== undefined && (obj.scavenge = message.scavenge ? Scavenge.toJSON(message.scavenge) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScavengeResponse>, I>>(object: I): QueryGetScavengeResponse {
    const message = createBaseQueryGetScavengeResponse();
    message.scavenge = (object.scavenge !== undefined && object.scavenge !== null)
      ? Scavenge.fromPartial(object.scavenge)
      : undefined;
    return message;
  },
};

function createBaseQueryAllScavengeRequest(): QueryAllScavengeRequest {
  return { pagination: undefined };
}

export const QueryAllScavengeRequest = {
  encode(message: QueryAllScavengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScavengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScavengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScavengeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllScavengeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllScavengeRequest>, I>>(object: I): QueryAllScavengeRequest {
    const message = createBaseQueryAllScavengeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllScavengeResponse(): QueryAllScavengeResponse {
  return { scavenge: [], pagination: undefined };
}

export const QueryAllScavengeResponse = {
  encode(message: QueryAllScavengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scavenge) {
      Scavenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllScavengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScavengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scavenge.push(Scavenge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScavengeResponse {
    return {
      scavenge: Array.isArray(object?.scavenge) ? object.scavenge.map((e: any) => Scavenge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllScavengeResponse): unknown {
    const obj: any = {};
    if (message.scavenge) {
      obj.scavenge = message.scavenge.map((e) => e ? Scavenge.toJSON(e) : undefined);
    } else {
      obj.scavenge = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllScavengeResponse>, I>>(object: I): QueryAllScavengeResponse {
    const message = createBaseQueryAllScavengeResponse();
    message.scavenge = object.scavenge?.map((e) => Scavenge.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCommitRequest(): QueryGetCommitRequest {
  return { index: "" };
}

export const QueryGetCommitRequest = {
  encode(message: QueryGetCommitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommitRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetCommitRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommitRequest>, I>>(object: I): QueryGetCommitRequest {
    const message = createBaseQueryGetCommitRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetCommitResponse(): QueryGetCommitResponse {
  return { commit: undefined };
}

export const QueryGetCommitResponse = {
  encode(message: QueryGetCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommitResponse {
    return { commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined };
  },

  toJSON(message: QueryGetCommitResponse): unknown {
    const obj: any = {};
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommitResponse>, I>>(object: I): QueryGetCommitResponse {
    const message = createBaseQueryGetCommitResponse();
    message.commit = (object.commit !== undefined && object.commit !== null)
      ? Commit.fromPartial(object.commit)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommitRequest(): QueryAllCommitRequest {
  return { pagination: undefined };
}

export const QueryAllCommitRequest = {
  encode(message: QueryAllCommitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCommitRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommitRequest>, I>>(object: I): QueryAllCommitRequest {
    const message = createBaseQueryAllCommitRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommitResponse(): QueryAllCommitResponse {
  return { commit: [], pagination: undefined };
}

export const QueryAllCommitResponse = {
  encode(message: QueryAllCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commit) {
      Commit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commit.push(Commit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitResponse {
    return {
      commit: Array.isArray(object?.commit) ? object.commit.map((e: any) => Commit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCommitResponse): unknown {
    const obj: any = {};
    if (message.commit) {
      obj.commit = message.commit.map((e) => e ? Commit.toJSON(e) : undefined);
    } else {
      obj.commit = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommitResponse>, I>>(object: I): QueryAllCommitResponse {
    const message = createBaseQueryAllCommitResponse();
    message.commit = object.commit?.map((e) => Commit.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Scavenge by index. */
  Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
  /** Queries a list of Scavenge items. */
  ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
  /** Queries a Commit by index. */
  Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
  /** Queries a list of Commit items. */
  CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Scavenge = this.Scavenge.bind(this);
    this.ScavengeAll = this.ScavengeAll.bind(this);
    this.Commit = this.Commit.bind(this);
    this.CommitAll = this.CommitAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse> {
    const data = QueryGetScavengeRequest.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Query", "Scavenge", data);
    return promise.then((data) => QueryGetScavengeResponse.decode(new _m0.Reader(data)));
  }

  ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse> {
    const data = QueryAllScavengeRequest.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Query", "ScavengeAll", data);
    return promise.then((data) => QueryAllScavengeResponse.decode(new _m0.Reader(data)));
  }

  Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse> {
    const data = QueryGetCommitRequest.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Query", "Commit", data);
    return promise.then((data) => QueryGetCommitResponse.decode(new _m0.Reader(data)));
  }

  CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse> {
    const data = QueryAllCommitRequest.encode(request).finish();
    const promise = this.rpc.request("scavenge.scavenge.Query", "CommitAll", data);
    return promise.then((data) => QueryAllCommitResponse.decode(new _m0.Reader(data)));
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
