(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_Resource_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_base_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/base/Table */ "./src/views/base/Table.vue");
/* harmony import */ var _views_base_Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/base/Forms */ "./src/views/base/Forms.vue");
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reconnecting-websocket */ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket-mjs.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Resource",
  data: function data() {
    return {
      mode: 'table',
      app: null,
      ws: null,
      actions: {},
      table: null,
      table_fields: null,
      form: null
    };
  },
  components: {
    Table: _views_base_Table__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    index: function index(data) {
      this.ws.send();
      this.table = data;
      this.table_fields = _toConsumableArray(Object.keys(data));
      this.mode = 'index';
    },
    getAction: function getAction(e) {
      console.log(e);
      var data = e.data;

      if (data.error) {
        return;
      } // TODO:
      //   Make Index;
      //   Make Create;
      //    Make Edit;
      //    Make Delete;
      //    Make Errors;


      switch (data.action) {
        case 'index':
          this.index(data.data);
          break;

        case 'create':
          this.mode = 'create';
          break;

        case 'edit':
          this.mode = 'edit';
          break;

        case 'permissions':
          this.actions = data.data;
          break;
      }
    }
  },
  computed: {},
  mounted: function mounted() {
    this.app = this.$route.params.app;
    this.ws = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_2__.default('ws://localhost:8000/admin/' + this.app);
    this.ws.onmessage = this.getAction;
    this.ws.send(JSON.stringify({
      action: 'view'
    }));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Forms',
  data: function data() {
    return {
      selected: [],
      // Must be an array reference!
      show: true,
      horizontal: {
        label: 'col-3',
        input: 'col-9'
      },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: ['Option 1', 'Option 2', 'Option 3', {
        value: 'some value',
        label: 'Selected option'
      }],
      selectedOption: 'some value',
      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes', 'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios', 'Radios - custom', 'Inline Radios - custom']
    };
  },
  methods: {
    validator: function validator(val) {
      return val ? val.length >= 4 : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      "default": function _default() {
        return ['username', 'registered', 'role', 'status'];
      }
    },
    caption: {
      type: String,
      "default": 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge: function getBadge(status) {
      return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
    }
  }
});

/***/ }),

/***/ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket-mjs.js":
/*!********************************************************************************!*\
  !*** ./node_modules/reconnecting-websocket/dist/reconnecting-websocket-mjs.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w !== 'undefined' && !!w && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = null;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            if (this._ws) {
                return this._ws.readyState;
            }
            return this._options.startClosed
                ? ReconnectingWebSocket.CLOSED
                : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    ReconnectingWebSocket.prototype.dispatchEvent = function (event) {
        var e_1, _a;
        var listeners = this._listeners[event.type];
        if (listeners) {
            try {
                for (var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()) {
                    var listener = listeners_1_1.value;
                    this._callEventListener(event, listener);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return true;
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, __spread(['RWS>'], args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (!!url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReconnectingWebSocket);


/***/ }),

/***/ "./src/views/Resource.vue":
/*!********************************!*\
  !*** ./src/views/Resource.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=1d099f48& */ "./src/views/Resource.vue?vue&type=template&id=1d099f48&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./src/views/Resource.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__.render,
  _Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Resource.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/base/Forms.vue":
/*!**********************************!*\
  !*** ./src/views/base/Forms.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=459e9c6b& */ "./src/views/base/Forms.vue?vue&type=template&id=459e9c6b&");
/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ "./src/views/base/Forms.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/base/Forms.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/base/Table.vue":
/*!**********************************!*\
  !*** ./src/views/base/Table.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=622e648a& */ "./src/views/base/Table.vue?vue&type=template&id=622e648a&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./src/views/base/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/base/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/Resource.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Resource.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/base/Forms.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/base/Forms.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/base/Table.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/base/Table.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/Resource.vue?vue&type=template&id=1d099f48&":
/*!***************************************************************!*\
  !*** ./src/views/Resource.vue?vue&type=template&id=1d099f48& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_1d099f48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resource.vue?vue&type=template&id=1d099f48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=template&id=1d099f48&");


/***/ }),

/***/ "./src/views/base/Forms.vue?vue&type=template&id=459e9c6b&":
/*!*****************************************************************!*\
  !*** ./src/views/base/Forms.vue?vue&type=template&id=459e9c6b& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_459e9c6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Forms.vue?vue&type=template&id=459e9c6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=template&id=459e9c6b&");


/***/ }),

/***/ "./src/views/base/Table.vue?vue&type=template&id=622e648a&":
/*!*****************************************************************!*\
  !*** ./src/views/base/Table.vue?vue&type=template&id=622e648a& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_622e648a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=622e648a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=template&id=622e648a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=template&id=1d099f48&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Resource.vue?vue&type=template&id=1d099f48& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.mode === "index"
        ? _c("Table", { attrs: { items: _vm.table, fields: _vm.table_fields } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=template&id=459e9c6b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Forms.vue?vue&type=template&id=459e9c6b& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Credit Card ")]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Form")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-header-actions" }, [
                      _c(
                        "a",
                        {
                          staticClass: "card-header-action",
                          attrs: {
                            href:
                              "https://coreui.io/vue/docs/components/form-components",
                            rel: "noreferrer noopener",
                            target: "_blank"
                          }
                        },
                        [
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v("docs")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Name",
                                  placeholder: "Enter your name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Credit Card Number",
                                  placeholder: "0000 0000 0000 0000"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  label: "Month",
                                  options: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12
                                  ]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  label: "Year",
                                  options: [
                                    2014,
                                    2015,
                                    2016,
                                    2017,
                                    2018,
                                    2019,
                                    2020,
                                    2021,
                                    2022,
                                    2023,
                                    2024,
                                    2025
                                  ]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: { label: "CVV/CVC", placeholder: "123" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Company ")]),
                    _c("small", [_vm._v("Form")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Company",
                          placeholder: "Enter your company name"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { label: "VAT", placeholder: "PL1234567890" }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Street",
                          placeholder: "Enter street name"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "City",
                                  placeholder: "Enter your city"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Postal code",
                                  placeholder: "Postal code"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { label: "Country", placeholder: "Country name" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Basic Form")]),
                    _vm._v(" Elements\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              description: "Let us know your full name.",
                              label: "Enter your name",
                              horizontal: "",
                              autocomplete: "name"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Static",
                              value: "Username",
                              horizontal: "",
                              plaintext: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Text input",
                              description: "This is a help text",
                              placeholder: "Text",
                              horizontal: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Date",
                              type: "date",
                              horizontal: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Email input",
                              description: "Please enter your email",
                              placeholder: "Enter your email",
                              type: "email",
                              horizontal: "",
                              autocomplete: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Password Input",
                              description: "Please enter a complex password",
                              placeholder: "Enter your password",
                              type: "password",
                              horizontal: "",
                              autocomplete: "current-password"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Disabled Input",
                              placeholder: "Disabled",
                              horizontal: "",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CTextarea", {
                            attrs: {
                              label: "Textarea",
                              placeholder: "Content...",
                              horizontal: "",
                              rows: "9"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Select",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select"
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Large select",
                              size: "lg",
                              horizontal: "",
                              value: _vm.selectedOption,
                              options: _vm.selectOptions,
                              placeholder: "Please select"
                            },
                            on: {
                              "update:value": function($event) {
                                _vm.selectedOption = $event
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Small select",
                              size: "sm",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select",
                              custom: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CSelect", {
                            attrs: {
                              label: "Select",
                              horizontal: "",
                              options: _vm.options,
                              placeholder: "Please select",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.checkboxNames, function(name, key) {
                            return [
                              _c(
                                "CRow",
                                {
                                  key: name,
                                  staticClass: "form-group",
                                  attrs: { form: "" }
                                },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "col-form-label",
                                      attrs: { tag: "label", sm: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(name) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    {
                                      class: key % 2 === 1 ? "form-inline" : "",
                                      attrs: { sm: "9" }
                                    },
                                    _vm._l(_vm.options, function(
                                      option,
                                      optionIndex
                                    ) {
                                      return _c("CInputCheckbox", {
                                        key: key + option,
                                        attrs: {
                                          label: option,
                                          value: option,
                                          custom: key > 1,
                                          name: "Option 1" + key,
                                          checked: optionIndex === key,
                                          inline: key % 2 === 1
                                        }
                                      })
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            { staticClass: "form-group", attrs: { form: "" } },
                            [
                              _c(
                                "CCol",
                                {
                                  staticClass: "col-form-label",
                                  attrs: { tag: "label", sm: "3" }
                                },
                                [
                                  _vm._v(
                                    "\n                  Switch checkboxes\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "9" } },
                                [
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: { color: "primary", checked: true }
                                  }),
                                  _vm._v(" "),
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      color: "success",
                                      checked: true,
                                      variant: "outline"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      color: "warning",
                                      checked: true,
                                      variant: "opposite"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      color: "danger",
                                      checked: true,
                                      shape: "pill"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      color: "info",
                                      checked: true,
                                      shape: "pill",
                                      variant: "outline"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CSwitch", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      color: "dark",
                                      checked: true,
                                      shape: "pill",
                                      variant: "opposite"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.radioNames, function(name, key) {
                            return [
                              _c(
                                "CRow",
                                {
                                  key: name,
                                  staticClass: "form-group",
                                  attrs: { form: "" }
                                },
                                [
                                  _c("CCol", { attrs: { sm: "3" } }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(name) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    staticClass: "col-sm-9",
                                    attrs: {
                                      options: _vm.options,
                                      custom: key > 1,
                                      checked: "Option " + key,
                                      inline: key % 2 === 1
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: { label: "File input", horizontal: "" }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "Multiple file input",
                              horizontal: "",
                              multiple: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "File custom input",
                              horizontal: "",
                              custom: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInputFile", {
                            attrs: {
                              label: "Multiple file custom input",
                              horizontal: "",
                              multiple: "",
                              custom: ""
                            }
                          })
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Inline")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { attrs: { inline: "" } },
                        [
                          _c("CInput", {
                            staticClass: "mr-2",
                            attrs: { placeholder: "Jane Doe" },
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [_c("small", [_vm._v("Name: ")])]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "jane.doe@example.com",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [_c("small", [_vm._v("Email: ")])]
                                },
                                proxy: true
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Horizontal")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              description: "Please enter your email.",
                              autocomplete: "email",
                              label: "Email",
                              horizontal: "",
                              placeholder: "Enter Email..."
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              description: "Please enter your password.",
                              autocomplete: "current-password",
                              label: "Password",
                              horizontal: "",
                              placeholder: "Enter Password..."
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Normal")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CForm",
                    { attrs: { novalidate: "" } },
                    [
                      _c(
                        "CCardBody",
                        [
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              description: "Please enter your email.",
                              autocomplete: "email",
                              label: "Email",
                              placeholder: "Enter Email...",
                              required: "",
                              "was-validated": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              description: "Please enter your password.",
                              autocomplete: "current-password",
                              label: "Password",
                              placeholder: "Enter Password...",
                              required: "",
                              "was-validated": ""
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCardFooter",
                        [
                          _c(
                            "CButton",
                            {
                              attrs: {
                                type: "submit",
                                size: "sm",
                                color: "primary"
                              }
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-check-circle" }
                              }),
                              _vm._v(" Submit")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CButton",
                            {
                              attrs: {
                                type: "reset",
                                size: "sm",
                                color: "danger"
                              }
                            },
                            [
                              _c("CIcon", { attrs: { name: "cil-ban" } }),
                              _vm._v(" Reset")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Input "),
                    _c("strong", [_vm._v("Grid")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-3" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-4" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "5" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-5" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "6" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-6" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "7" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-7" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-8" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "9" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-9" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "10" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-10" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "11" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-11" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-sm-12" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-user" } }),
                          _vm._v(" Login")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Input "),
                    _c("strong", [_vm._v("Sizes")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Small input",
                          size: "sm",
                          horizontal: "",
                          placeholder: "size='sm'"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Default input",
                          horizontal: "",
                          placeholder: "normal"
                        }
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          label: "Large input",
                          size: "lg",
                          horizontal: "",
                          placeholder: "size='lg'"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "primary"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Basic Validation")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { attrs: { validated: "", novalidate: "" } },
                        [
                          _c("CInput", {
                            attrs: {
                              label: "Input is valid",
                              "valid-feedback": "Input is not required."
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Input is invalid",
                              required: "",
                              "valid-feedback": "Thank you :)",
                              "invalid-feedback":
                                "Please provide a required input."
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "12", md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Custom Validation")]),
                    _vm._v(" Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: {
                              label: "Input is valid",
                              "valid-feedback": "Input is valid.",
                              "invalid-feedback":
                                "Please provide at least 4 characters.",
                              value: "Valid value",
                              "is-valid": _vm.validator
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              label: "Input is invalid",
                              "valid-feedback": "Thank you :)",
                              "invalid-feedback":
                                "Please provide at least 4 characters.",
                              "is-valid": _vm.validator
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Icon/Text")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-user" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append-content",
                            fn: function() {
                              return [
                                _c("CIcon", {
                                  attrs: { name: "cil-envelope-open" }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { placeholder: "ex. $1.000.000", append: ".00" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-euro" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Buttons")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-magnifying-glass" }
                                    }),
                                    _vm._v(" Search\n              ")
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  {
                                    attrs: { type: "submit", color: "primary" }
                                  },
                                  [_vm._v("Submit")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cib-facebook" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CButton",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cib-twitter" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _c("strong", [_vm._v("Dropdowns")]),
                    _vm._v(" Groups\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CInput", {
                        attrs: { placeholder: "Username" },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary"
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          autocomplete: "email"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary",
                                      right: ""
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("CInput", {
                        attrs: { placeholder: "..." },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Split",
                                      color: "primary",
                                      split: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Action")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Another action")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { href: "#" } },
                                      [_vm._v("Something else here...")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "CDropdown",
                                  {
                                    attrs: {
                                      togglerText: "Action",
                                      color: "primary",
                                      right: ""
                                    }
                                  },
                                  [
                                    _c("CDropdownItem", [_vm._v("Action")]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Another action")
                                    ]),
                                    _vm._v(" "),
                                    _c("CDropdownItem", [
                                      _vm._v("Something else here...")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "CDropdownItem",
                                      { attrs: { disabled: "" } },
                                      [_vm._v("Disabled action")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "submit",
                            size: "sm",
                            color: "success"
                          }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-check-circle" } }),
                          _vm._v(" Submit")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { type: "reset", size: "sm", color: "danger" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-ban" } }),
                          _vm._v(" Reset")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Use the grid for big devices! "),
                    _c("small", [
                      _c("code", [_vm._v(".col-lg-*")]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".col-md-*")]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".col-sm-*")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    _vm._l([4, 5, 6, 7, 8], function(number, key) {
                      return _c(
                        "CRow",
                        { key: key, staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { col: 12 - number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: {
                                  placeholder: ".col-md-" + (12 - number)
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { col: number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-md-" + number }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "primary" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "danger" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "warning" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c("CButton", { attrs: { size: "sm", color: "info" } }, [
                        _vm._v("Action")
                      ]),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "success" } },
                        [_vm._v("Action")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Input Grid for small devices! "),
                    _c("small", [_c("code", [_vm._v(".col-*")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    _vm._l([4, 5, 6, 7, 8], function(number, key) {
                      return _c(
                        "CRow",
                        { key: key, staticClass: "form-group" },
                        [
                          _c(
                            "CCol",
                            { attrs: { col: number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-" + number }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { col: 12 - number } },
                            [
                              _c("CInput", {
                                staticClass: "mb-0",
                                attrs: { placeholder: ".col-" + (12 - number) }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardFooter",
                    [
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "primary" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "danger" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "warning" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c("CButton", { attrs: { size: "sm", color: "info" } }, [
                        _vm._v("Action")
                      ]),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { size: "sm", color: "success" } },
                        [_vm._v("Action")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { prepend: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "email",
                              autocomplete: "email",
                              prepend: "Email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              type: "password",
                              autocomplete: "current-password",
                              prepend: "Password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "primary"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { placeholder: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Email",
                              type: "email",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Password",
                              type: "password",
                              autocomplete: "current-password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "append-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  staticClass: "btn btn-sm btn-secondary",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Example Form\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("CInput", {
                            attrs: { placeholder: "Username" },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Email",
                              type: "email",
                              autocomplete: "email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-envelope-closed" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Password",
                              type: "password",
                              autocomplete: "current-password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-shield-alt" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group form-actions" },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: {
                                    type: "submit",
                                    size: "sm",
                                    color: "success"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Submit\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { lg: "12" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "CCard",
                        [
                          _c(
                            "CCardHeader",
                            [
                              _c("CIcon", { attrs: { name: "cil-pencil" } }),
                              _vm._v(" Form Elements\n            "),
                              _c(
                                "div",
                                { staticClass: "card-header-actions" },
                                [
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-setting",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-settings" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-minimize",
                                      on: {
                                        click: function($event) {
                                          _vm.formCollapsed = !_vm.formCollapsed
                                        }
                                      }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: {
                                          name:
                                            "cil-chevron-" +
                                            (_vm.formCollapsed
                                              ? "bottom"
                                              : "top")
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CLink",
                                    {
                                      staticClass:
                                        "card-header-action btn-close",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      }
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-x-circle" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCollapse",
                            { attrs: { show: _vm.formCollapsed } },
                            [
                              _c(
                                "CCardBody",
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Prepended text",
                                      description: "Here's some help text",
                                      type: "email",
                                      autocomplete: "email",
                                      prepend: "@"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Appended text",
                                      append: ".00",
                                      description: "Here's some help text"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Appended and prepended text",
                                      append: ".00",
                                      description: "Here's some help text",
                                      prepend: "$"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: "Append with button",
                                      description: "Here's some help text"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c(
                                                "CButton",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("Go!")]
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      false,
                                      542345765
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: { label: "Two-buttons append" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c(
                                                "CButton",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("Search")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "CButton",
                                                { attrs: { color: "danger" } },
                                                [_vm._v("Options")]
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      false,
                                      755980186
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-actions" },
                                    [
                                      _c(
                                        "CButton",
                                        {
                                          attrs: {
                                            type: "submit",
                                            color: "primary"
                                          }
                                        },
                                        [_vm._v("Save changes")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CButton",
                                        { attrs: { color: "secondary" } },
                                        [_vm._v("Cancel")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=template&id=622e648a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/base/Table.vue?vue&type=template&id=622e648a& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CCard",
    [
      _c(
        "CCardHeader",
        [
          _vm._t("header", [
            _c("CIcon", { attrs: { name: "cil-grid" } }),
            _vm._v(" " + _vm._s(_vm.caption) + "\n    ")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "CCardBody",
        [
          _c("CDataTable", {
            attrs: {
              hover: _vm.hover,
              striped: _vm.striped,
              border: _vm.border,
              small: _vm.small,
              fixed: _vm.fixed,
              items: _vm.items,
              fields: _vm.fields,
              "items-per-page": _vm.small ? 10 : 5,
              dark: _vm.dark,
              pagination: ""
            },
            scopedSlots: _vm._u([
              {
                key: "status",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "td",
                      [
                        _c(
                          "CBadge",
                          { attrs: { color: _vm.getBadge(item.status) } },
                          [_vm._v(_vm._s(item.status))]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);