/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.PlatformAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.PlatformAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SeedPhrase,
 *   !proto.SessionID>}
 */
const methodInfo_PlatformAPI_SessionCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SessionID,
  /** @param {!proto.SeedPhrase} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.SessionID.deserializeBinary
);


/**
 * @param {!proto.SeedPhrase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SessionID)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SessionID>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.sessionCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/SessionCreate',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionCreate,
      callback);
};


/**
 * @param {!proto.SeedPhrase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SessionID>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.sessionCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/SessionCreate',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionCreate);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SessionID,
 *   !proto.WalletReq>}
 */
const methodInfo_PlatformAPI_SessionCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.WalletReq,
  /** @param {!proto.SessionID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.WalletReq.deserializeBinary
);


/**
 * @param {!proto.SessionID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WalletReq)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WalletReq>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.sessionCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/SessionCheck',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionCheck,
      callback);
};


/**
 * @param {!proto.SessionID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WalletReq>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.sessionCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/SessionCheck',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionCheck);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SessionID,
 *   !proto.NilReq>}
 */
const methodInfo_PlatformAPI_SessionDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NilReq,
  /** @param {!proto.SessionID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.NilReq.deserializeBinary
);


/**
 * @param {!proto.SessionID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NilReq)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NilReq>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.sessionDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/SessionDelete',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionDelete,
      callback);
};


/**
 * @param {!proto.SessionID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NilReq>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.sessionDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/SessionDelete',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SessionDelete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NilReq,
 *   !proto.SeedPhrase>}
 */
const methodInfo_PlatformAPI_NewMnemonic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SeedPhrase,
  /** @param {!proto.NilReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.SeedPhrase.deserializeBinary
);


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SeedPhrase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SeedPhrase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.newMnemonic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/NewMnemonic',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NewMnemonic,
      callback);
};


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SeedPhrase>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.newMnemonic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/NewMnemonic',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NewMnemonic);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AtasksOutReq,
 *   !proto.ReturnAPITask>}
 */
const methodInfo_PlatformAPI_AutoTaskOut = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReturnAPITask,
  /** @param {!proto.AtasksOutReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReturnAPITask.deserializeBinary
);


/**
 * @param {!proto.AtasksOutReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReturnAPITask)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReturnAPITask>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.autoTaskOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/AutoTaskOut',
      request,
      metadata || {},
      methodInfo_PlatformAPI_AutoTaskOut,
      callback);
};


/**
 * @param {!proto.AtasksOutReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReturnAPITask>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.autoTaskOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/AutoTaskOut',
      request,
      metadata || {},
      methodInfo_PlatformAPI_AutoTaskOut);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ResQ,
 *   !proto.NodeTodoQ>}
 */
const methodInfo_PlatformAPI_AutoTaskIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NodeTodoQ,
  /** @param {!proto.ResQ} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.NodeTodoQ.deserializeBinary
);


/**
 * @param {!proto.ResQ} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NodeTodoQ)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NodeTodoQ>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.autoTaskIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/AutoTaskIn',
      request,
      metadata || {},
      methodInfo_PlatformAPI_AutoTaskIn,
      callback);
};


/**
 * @param {!proto.ResQ} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NodeTodoQ>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.autoTaskIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/AutoTaskIn',
      request,
      metadata || {},
      methodInfo_PlatformAPI_AutoTaskIn);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BlockInfoReq,
 *   !proto.RetJSONBlock>}
 */
const methodInfo_PlatformAPI_BlockOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RetJSONBlock,
  /** @param {!proto.BlockInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.RetJSONBlock.deserializeBinary
);


/**
 * @param {!proto.BlockInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RetJSONBlock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RetJSONBlock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.blockOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/BlockOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_BlockOne,
      callback);
};


/**
 * @param {!proto.BlockInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RetJSONBlock>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.blockOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/BlockOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_BlockOne);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TrxInfoReq,
 *   !proto.RetJSONTrx>}
 */
const methodInfo_PlatformAPI_TransactionOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RetJSONTrx,
  /** @param {!proto.TrxInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.RetJSONTrx.deserializeBinary
);


/**
 * @param {!proto.TrxInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RetJSONTrx)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RetJSONTrx>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.transactionOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/TransactionOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TransactionOne,
      callback);
};


/**
 * @param {!proto.TrxInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RetJSONTrx>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.transactionOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/TransactionOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TransactionOne);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NodeInfoReq,
 *   !proto.RetJSONNode>}
 */
const methodInfo_PlatformAPI_NodeOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RetJSONNode,
  /** @param {!proto.NodeInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.RetJSONNode.deserializeBinary
);


/**
 * @param {!proto.NodeInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RetJSONNode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RetJSONNode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.nodeOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/NodeOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NodeOne,
      callback);
};


/**
 * @param {!proto.NodeInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RetJSONNode>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.nodeOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/NodeOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NodeOne);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BlocksListReq,
 *   !proto.BlocksListResp>}
 */
const methodInfo_PlatformAPI_BlocksList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.BlocksListResp,
  /** @param {!proto.BlocksListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.BlocksListResp.deserializeBinary
);


/**
 * @param {!proto.BlocksListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.BlocksListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BlocksListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.blocksList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/BlocksList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_BlocksList,
      callback);
};


/**
 * @param {!proto.BlocksListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BlocksListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.blocksList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/BlocksList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_BlocksList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TrxsListReq,
 *   !proto.TrxsListResp>}
 */
const methodInfo_PlatformAPI_TransactionsList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TrxsListResp,
  /** @param {!proto.TrxsListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TrxsListResp.deserializeBinary
);


/**
 * @param {!proto.TrxsListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TrxsListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TrxsListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.transactionsList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/TransactionsList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TransactionsList,
      callback);
};


/**
 * @param {!proto.TrxsListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TrxsListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.transactionsList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/TransactionsList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TransactionsList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NilReq,
 *   !proto.NodesListResp>}
 */
const methodInfo_PlatformAPI_NodesList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NodesListResp,
  /** @param {!proto.NilReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.NodesListResp.deserializeBinary
);


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NodesListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NodesListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.nodesList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/NodesList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NodesList,
      callback);
};


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NodesListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.nodesList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/NodesList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_NodesList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NilReq,
 *   !proto.CoinsListResp>}
 */
const methodInfo_PlatformAPI_CoinsList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CoinsListResp,
  /** @param {!proto.NilReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CoinsListResp.deserializeBinary
);


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CoinsListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CoinsListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.coinsList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/CoinsList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinsList,
      callback);
};


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CoinsListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.coinsList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/CoinsList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinsList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CoinReq,
 *   !proto.CoinResp>}
 */
const methodInfo_PlatformAPI_CoinOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CoinResp,
  /** @param {!proto.CoinReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CoinResp.deserializeBinary
);


/**
 * @param {!proto.CoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CoinResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CoinResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.coinOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/CoinOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinOne,
      callback);
};


/**
 * @param {!proto.CoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CoinResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.coinOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/CoinOne',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinOne);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WalletListReq,
 *   !proto.TasksListResp>}
 */
const methodInfo_PlatformAPI_TasksList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TasksListResp,
  /** @param {!proto.WalletListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TasksListResp.deserializeBinary
);


/**
 * @param {!proto.WalletListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TasksListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TasksListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.tasksList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/TasksList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TasksList,
      callback);
};


/**
 * @param {!proto.WalletListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TasksListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.tasksList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/TasksList',
      request,
      metadata || {},
      methodInfo_PlatformAPI_TasksList);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WalletReq,
 *   !proto.WalletResp>}
 */
const methodInfo_PlatformAPI_WalletCoins = new grpc.web.AbstractClientBase.MethodInfo(
  proto.WalletResp,
  /** @param {!proto.WalletReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.WalletResp.deserializeBinary
);


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WalletResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WalletResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletCoins =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletCoins',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletCoins,
      callback);
};


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WalletResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletCoins =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletCoins',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletCoins);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NilReq,
 *   !proto.SyncResp>}
 */
const methodInfo_PlatformAPI_SyncStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SyncResp,
  /** @param {!proto.NilReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.SyncResp.deserializeBinary
);


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SyncResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SyncResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.syncStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/SyncStatus',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SyncStatus,
      callback);
};


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SyncResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.syncStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/SyncStatus',
      request,
      metadata || {},
      methodInfo_PlatformAPI_SyncStatus);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NilReq,
 *   !proto.CoinBaseResp>}
 */
const methodInfo_PlatformAPI_CoinBase = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CoinBaseResp,
  /** @param {!proto.NilReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CoinBaseResp.deserializeBinary
);


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CoinBaseResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CoinBaseResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.coinBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/CoinBase',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinBase,
      callback);
};


/**
 * @param {!proto.NilReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CoinBaseResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.coinBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/CoinBase',
      request,
      metadata || {},
      methodInfo_PlatformAPI_CoinBase);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WalletReq,
 *   !proto.WalletRewardsResp>}
 */
const methodInfo_PlatformAPI_WalletRewards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.WalletRewardsResp,
  /** @param {!proto.WalletReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.WalletRewardsResp.deserializeBinary
);


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WalletRewardsResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WalletRewardsResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletRewards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletRewards',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletRewards,
      callback);
};


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WalletRewardsResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletRewards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletRewards',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletRewards);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WalletReq,
 *   !proto.WalletDelegateResp>}
 */
const methodInfo_PlatformAPI_WalletDelegate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.WalletDelegateResp,
  /** @param {!proto.WalletReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.WalletDelegateResp.deserializeBinary
);


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WalletDelegateResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WalletDelegateResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletDelegate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletDelegate',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletDelegate,
      callback);
};


/**
 * @param {!proto.WalletReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WalletDelegateResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletDelegate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletDelegate',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletDelegate);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WalletListReq,
 *   !proto.TrxsListResp>}
 */
const methodInfo_PlatformAPI_WalletTrxs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TrxsListResp,
  /** @param {!proto.WalletListReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TrxsListResp.deserializeBinary
);


/**
 * @param {!proto.WalletListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TrxsListResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TrxsListResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletTrxs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletTrxs',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletTrxs,
      callback);
};


/**
 * @param {!proto.WalletListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TrxsListResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletTrxs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletTrxs',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletTrxs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SendCoinReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActSendCoin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.SendCoinReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.SendCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActSendCoin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActSendCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActSendCoin,
      callback);
};


/**
 * @param {!proto.SendCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActSendCoin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActSendCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActSendCoin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DelegCoinReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActDelegCoin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.DelegCoinReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.DelegCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActDelegCoin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActDelegCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActDelegCoin,
      callback);
};


/**
 * @param {!proto.DelegCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActDelegCoin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActDelegCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActDelegCoin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeclareNodeReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActDeclrNode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.DeclareNodeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.DeclareNodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActDeclrNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActDeclrNode',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActDeclrNode,
      callback);
};


/**
 * @param {!proto.DeclareNodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActDeclrNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActDeclrNode',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActDeclrNode);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StartStopNodeReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActOnOffNode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.StartStopNodeReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.StartStopNodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActOnOffNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActOnOffNode',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActOnOffNode,
      callback);
};


/**
 * @param {!proto.StartStopNodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActOnOffNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActOnOffNode',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActOnOffNode);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateCoinReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActCreateCoin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.CreateCoinReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.CreateCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActCreateCoin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActCreateCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCreateCoin,
      callback);
};


/**
 * @param {!proto.CreateCoinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActCreateCoin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActCreateCoin',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCreateCoin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateCheckReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActCreateChec = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.CreateCheckReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.CreateCheckReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActCreateChec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActCreateChec',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCreateChec,
      callback);
};


/**
 * @param {!proto.CreateCheckReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActCreateChec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActCreateChec',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCreateChec);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RedeemCheckReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActRedeemCheck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.RedeemCheckReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.RedeemCheckReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActRedeemCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActRedeemCheck',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActRedeemCheck,
      callback);
};


/**
 * @param {!proto.RedeemCheckReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActRedeemCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActRedeemCheck',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActRedeemCheck);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NewNodeInfoReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActNodeInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.NewNodeInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.NewNodeInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActNodeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActNodeInfo',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActNodeInfo,
      callback);
};


/**
 * @param {!proto.NewNodeInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActNodeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActNodeInfo',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActNodeInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NewCoinInfoReq,
 *   !proto.ActionResp>}
 */
const methodInfo_PlatformAPI_WalletActCoinInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ActionResp,
  /** @param {!proto.NewCoinInfoReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ActionResp.deserializeBinary
);


/**
 * @param {!proto.NewCoinInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ActionResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ActionResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PlatformAPIClient.prototype.walletActCoinInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PlatformAPI/WalletActCoinInfo',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCoinInfo,
      callback);
};


/**
 * @param {!proto.NewCoinInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ActionResp>}
 *     A native promise that resolves to the response
 */
proto.PlatformAPIPromiseClient.prototype.walletActCoinInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PlatformAPI/WalletActCoinInfo',
      request,
      metadata || {},
      methodInfo_PlatformAPI_WalletActCoinInfo);
};


module.exports = proto;

