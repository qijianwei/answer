/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paoya__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function inject() {
    for (var key in _export__WEBPACK_IMPORTED_MODULE_1__) {
        _paoya__WEBPACK_IMPORTED_MODULE_0__["default"][key] = _export__WEBPACK_IMPORTED_MODULE_1__[key];
    }
}
inject();
window['PaoYa'] = window['PaoYa'] || _paoya__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PaoYa = /** @class */ (function () {
    function PaoYa() {
    }
    return PaoYa;
}());
var paoya = new PaoYa();
/* harmony default export */ __webpack_exports__["default"] = (paoya);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_navigator_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core_navigator_Component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_navigator_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _core_navigator_View__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_navigator_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _core_navigator_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_network_Request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestConfig", function() { return _core_network_Request__WEBPACK_IMPORTED_MODULE_4__["RequestConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _core_network_Request__WEBPACK_IMPORTED_MODULE_4__["Request"]; });

/* harmony import */ var _game_DataCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataCenter", function() { return _game_DataCenter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _game_service_TimerService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return _game_service_TimerService__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _game_view_LaunchScreenView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LaunchScreenView", function() { return _game_view_LaunchScreenView__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_Array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_Date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _utils_Date__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_Date__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_Number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _utils_Number__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_Number__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _laya_laya__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
















/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _network_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _paoya__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._requests = [];
        _this.dialogs = [];
        _this.navigator = _paoya__WEBPACK_IMPORTED_MODULE_1__["default"].navigator;
        return _this;
    }
    Component.prototype._onEnable = function () {
        _super.prototype._onEnable.call(this);
        this.owner.addClickListener(this, this.onThrottleClick, true);
    };
    Component.prototype._onViewClick = function (e) {
        switch (e.target.name) {
            case 'pop':
                this.navigator.pop();
                break;
            case 'popToRoot':
                this.navigator.popToRootScene();
                break;
        }
        this.onThrottleClick(e);
    };
    /**有节制的点击，防止用户点击频率过快，默认间隔500ms */
    Component.prototype.onThrottleClick = function (e) {
    };
    Component.prototype._onLoad = function () {
        this.onLoad();
    };
    Component.prototype.onLoad = function () {
    };
    Component.prototype._onAppear = function () {
        this.onAppear();
    };
    Component.prototype.onAppear = function () {
    };
    Component.prototype._onDisappear = function () {
        this.onDisappear();
    };
    Component.prototype.onDisappear = function () {
    };
    Component.prototype._destroy = function () {
        this.destroyXMR();
        _super.prototype._destroy.call(this);
    };
    Component.prototype._onReceiveMessage = function (cmd, value) {
        if (!this.enabled)
            return;
        this.onReceiveMessage(cmd, value);
    };
    Component.prototype._onReceiveSocketError = function (cmd, code, message) {
        this.onReceiveSocketError(cmd, code, message);
    };
    /**当前 scene 收到服务器 socket 命令时触发，虚方法 */
    Component.prototype.onReceiveMessage = function (cmd, value) {
    };
    /**当前 scene 收到服务器socket命令错误时触发，虚方法 */
    Component.prototype.onReceiveSocketError = function (cmd, code, message) {
    };
    /** ================ Request ================ **/
    Component.prototype.GET = function (path, params, success, fail) {
        var _this = this;
        //TODO:
        //1、支持动态参数
        if (params instanceof Function) {
            success = params;
            params = {};
            fail = success;
        }
        var xmr = _network_Request__WEBPACK_IMPORTED_MODULE_0__["Request"].GET(path, params, function (value) {
            success.call(_this, value);
        }, function (msg, code) {
            fail.call(_this, msg, code);
        });
        this._requests.push(xmr);
    };
    Component.prototype.POST = function (path, params, success, fail) {
        var _this = this;
        //1、支持动态参数
        if (params instanceof Function) {
            success = params;
            params = {};
            fail = success;
        }
        var xmr = _network_Request__WEBPACK_IMPORTED_MODULE_0__["Request"].POST(path, params, function (res) {
            success.call(_this, res);
        }, function (msg, code) {
            fail.call(_this, msg, code);
        });
        this._requests.push(xmr);
    };
    Component.prototype.destroyXMR = function () {
        for (var i = this._requests.length - 1; i >= 0; i--) {
            var xmr = this._requests.pop();
            if (xmr.http.readyState != XMLHttpRequest.DONE) {
                xmr.http.abort && xmr.http.abort();
            }
        }
    };
    Component.prototype.popup = function (dialog) {
        if (dialog instanceof Laya.Dialog) {
            dialog.popup();
            this.dialogs.push(dialog);
        }
        else {
            console.error('当前popup的不是Dialog实例');
        }
    };
    Component.prototype.closeDialogs = function () {
        for (var i = 0, length_1 = this.dialogs.length; i < length_1; i++) {
            var dialog = this.dialogs[i];
            dialog.destroy();
        }
    };
    /**点击右上角转发时触发 */
    Component.prototype.onShareAppMessage = function () {
        return null;
    };
    /**当网络变化时调用 */
    Component.prototype.onNetworkChange = function (e) {
    };
    /**当socket断开时调用 */
    Component.prototype.onSocketClose = function () {
    };
    return Component;
}(Laya.Script));
/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestConfig", function() { return RequestConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RequestConfig = /** @class */ (function () {
    function RequestConfig() {
    }
    RequestConfig.baseURL = "http://lobby.xingqiu123.com/gx/";
    RequestConfig.token = "7TD562pfG74jjtapdDw5aCpIoXKzDDAN18QjeVhmPJM=";
    RequestConfig.headers = ["Content-Type", "application/x-www-form-urlencoded"];
    RequestConfig.maxRetryTimes = 3;
    return RequestConfig;
}());

RequestConfig.makeParamsHandler = function (params) {
    if (!params['user_token'] && RequestConfig.token) {
        params['user_token'] = RequestConfig.token;
    }
    return params;
};
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        var _this_1 = _super.call(this) || this;
        _this_1._retryTimes = 0;
        var _this = _this_1;
        _this_1.http.ontimeout = function (e) {
            _this.timeout(e);
        };
        return _this_1;
    }
    Request.prototype.sendRequest = function (path, params, method) {
        if (!RequestConfig.baseURL) {
            console.error("请指定baseURL");
            return;
        }
        this._path = path;
        if (RequestConfig.makeParamsHandler) {
            params = RequestConfig.makeParamsHandler(params);
        }
        console.log("R >>> | " + path + " | " + (params['wxparams'] || JSON.stringify(params)));
        var items = [];
        for (var key in params) {
            //items.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
            items.push(key + "=" + params[key]);
        }
        var result = items.join("&");
        var url = '';
        if (path.indexOf('http') != -1) {
            url = path;
        }
        else {
            url = RequestConfig.baseURL + path;
        }
        if (method == 'get') {
            url += "?" + result;
            result = null;
        }
        this.$url = url;
        this.$query = result;
        this.$method = method;
        this.send(url, result, method, null, RequestConfig.headers);
    };
    /**发送GET请求 */
    Request.prototype.GET = function (path, params) {
        this.sendRequest(path, params, 'get');
    };
    /**发送POST请求 */
    Request.prototype.POST = function (path, params) {
        this.sendRequest(path, params, 'post');
    };
    /**重写父类的complete方法 */
    Request.prototype.complete = function () {
        console.log("R <<< | " + this._path + " | " + this.http.responseText);
        _super.prototype.complete.call(this);
    };
    /**重写父类的complete方法 */
    Request.prototype.error = function (message) {
        _super.prototype.error.call(this, message);
    };
    Request.prototype.timeout = function (message) {
        if (this._retryTimes < RequestConfig.maxRetryTimes) {
            this._retryTimes++;
            setTimeout(function () {
                this.send(this.$url, this.$query, this.$method, null, RequestConfig.headers);
            }.bind(this), 500);
        }
        else {
            this.error(message);
        }
    };
    /**类方法进行GET请求 */
    Request.GET = function (path, params, suc, fail) {
        var _this_1 = this;
        if (fail === void 0) { fail = null; }
        var xmr = new Request();
        xmr.on(Laya.Event.COMPLETE, this, function (data) {
            _this_1.handleError(data, suc, fail);
        });
        xmr.on(Laya.Event.ERROR, this, function (res) {
            fail && fail.call(_this_1, res || "连接服务器失败");
        });
        xmr.GET(path, params);
        return xmr;
    };
    /**类方法进行POST请求 */
    Request.POST = function (path, params, suc, fail) {
        var _this_1 = this;
        if (fail === void 0) { fail = null; }
        var xmr = new Request();
        xmr.on(Laya.Event.COMPLETE, this, function (data) {
            _this_1.handleError(data, suc, fail);
        });
        xmr.on(Laya.Event.ERROR, this, function (res) {
            fail && fail.call(_this_1, res || "连接服务器失败");
        });
        xmr.POST(path, params);
        return xmr;
    };
    Request.handleError = function (data, suc, fail) {
        data = JSON.parse(data);
        var code = data.code;
        if (code == 200) {
            suc && suc.call(this, data.value);
        }
        else {
            fail && fail.call(this, data.message || "请求出现错误", (data.errorcode ? data.errorcode : code));
        }
    };
    return Request;
}(Laya.HttpRequest));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**为View添加了JSONView变量，用于记录该View的创建JSON，方便从JSON创建view */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super.call(this) || this;
        /**用于记录打开当前scene时，从外部传进来的数据 */
        _this.params = null;
        _this.sceneName = '';
        _this.setupJSONView();
        _this.createJSONView();
        _this._addClickListener();
        return _this;
    }
    /**为当前View的子View设置JSONView，方便统一进行处理，虚方法 */
    View.prototype.setupJSONView = function () {
    };
    View.prototype.createJSONView = function () {
        var json = this.constructor['JSONView'];
        json && this.createView(json);
    };
    /**添加点击事件监听，以便进行简单处理 */
    View.prototype._addClickListener = function () {
        var prototype = View.prototype;
        if (this.onClick !== prototype.onClick) {
            this.on(Laya.Event.CLICK, this, this._onClick);
        }
    };
    View.prototype._onClick = function (e) {
        this.onClick(e);
    };
    /**当前Scene被点击时调用，虚方法 */
    View.prototype.onClick = function (e) {
    };
    View.prototype._onAppear = function () {
        this.onAppear();
    };
    View.prototype.onAppear = function () {
    };
    View.prototype._onDisappear = function () {
        this.onDisappear();
    };
    View.prototype.onDisappear = function () {
    };
    View.prototype._onAdded = function () {
        _super.prototype._onAdded.call(this);
        this.onAdded();
    };
    View.prototype._onRemoved = function () {
        _super.prototype._onRemoved.call(this);
        this.onRemoved();
    };
    View.prototype.onAdded = function () {
    };
    View.prototype.onRemoved = function () {
    };
    View.prototype.open = function (closeOther, param) {
        if (closeOther === void 0) { closeOther = false; }
        this.params = param;
        _super.prototype.open.call(this, closeOther, param);
    };
    return View;
}(Laya.View));
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this.createJSONView();
        return _this;
    }
    Dialog.prototype.createJSONView = function () {
        var json = this.constructor['JSONView'];
        json && this.createView(json);
    };
    Dialog.prototype._onAdded = function () {
        _super.prototype._onAdded.call(this);
        this.onAdded();
    };
    Dialog.prototype.onAdded = function () {
    };
    Dialog.prototype._onRemoved = function () {
        _super.prototype._onRemoved.call(this);
        this.onRemoved();
    };
    Dialog.prototype.onRemoved = function () {
    };
    return Dialog;
}(Laya.Dialog));
/* harmony default export */ __webpack_exports__["default"] = (Dialog);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var commonScenes = {};
var Navigator = /** @class */ (function (_super) {
    __extends(Navigator, _super);
    function Navigator() {
        var _this = _super.call(this) || this;
        _this.scenes = [];
        return _this;
    }
    Navigator.prototype.popup = function (sceneName, params, complete, progress, closeOther) {
        if (closeOther === void 0) { closeOther = true; }
        Laya.Scene.load(this.makeDialogName(sceneName), Laya.Handler.create(null, function (dialog) {
            dialog.isModal = true;
            dialog.isShowEffect = false;
            dialog["params"] = params;
            dialog.open(closeOther, params);
            complete && complete.runWith(dialog);
        }), progress);
    };
    Navigator.prototype.push = function (sceneName, params, resURL, complete, progress, prepare) {
        this._open(sceneName, params, resURL, complete, progress, prepare, true);
    };
    Navigator.prototype.pop = function () {
        this.scenes.pop().close('pop');
        var scene = this.scenes[this.scenes.length - 1];
        this.activeScene(scene);
    };
    Navigator.prototype.popToLastScene = function (sceneName) {
    };
    Navigator.prototype.findSceneByName = function (sceneName) {
        var desScene = null;
        for (var i = this.scenes.length - 1; i >= 0; i--) {
            var scene = this.scenes[i];
            if (scene.sceneName.indexOf(sceneName) != -1) {
                desScene = scene;
                break;
            }
        }
        return desScene;
    };
    Navigator.prototype.popToScene = function (sceneName) {
        for (var i = this.scenes.length; i--; i >= 0) {
            var scene = this.scenes[i];
            if (scene.sceneName === sceneName) {
                this.activeScene(scene);
                break;
            }
            else {
                this.scenes.pop().close('pop');
            }
        }
    };
    Navigator.prototype.activeScene = function (scene) {
        !scene.visible && (scene.visible = true);
        this.visibleScene = scene;
        this._onAppear();
    };
    Navigator.prototype.popToRootScene = function () {
        if (this.scenes.length == 1)
            return;
        while (this.scenes.length > 1) {
            this.scenes.pop().close('pop');
        }
        var scene = this.scenes[this.scenes.length - 1];
        this.activeScene(scene);
    };
    Navigator.prototype.present = function (sceneName, params, resURL, complete, progress, prepare) {
        this._open(sceneName, params, resURL, complete, progress, prepare, false);
    };
    Navigator.prototype.dismiss = function () {
        this.pop();
    };
    Navigator.prototype.replace = function (sceneName, params) {
        var scene;
        for (var i = this.scenes.length - 1; i >= 0; i--) {
            scene = this.scenes[i];
            scene.destroy();
            this.scenes.pop();
            if (scene.sceneName == sceneName) {
                this.visibleScene = null;
                this.push(sceneName, params);
                return;
            }
        }
        console.error('错误的:' + sceneName);
    };
    /**在视图栈中动态替换指定的scene，实现逻辑为
     * 1、找到指定的oldScene所在的位置，并pop到她所在的位置
     * 2、用newScene替换掉它
     *
     */
    Navigator.prototype.replaceSceneWith = function (oldScene, newSceneName, params) {
        var scene;
        var index = this.scenes.indexOf(oldScene);
        if (index < 0) {
            console.error("指定的scene未包含在navigator中");
            return;
        }
        for (var i = this.scenes.length - 1; i >= index; i--) {
            scene = this.scenes[i];
            scene.destroy();
            this.scenes.pop();
        }
        this.visibleScene = null;
        this.push(newSceneName, params);
    };
    Navigator.prototype.visibleSceneIs = function (sceneName) {
        return this.visibleScene.sceneName.indexOf(sceneName) > -1;
    };
    Navigator.prototype.makeSceneName = function (name) {
        if (commonScenes[name]) {
            return "scenes/" + commonScenes[name] + ".scene";
        }
        if (Navigator.scenesMap[name]) {
            return Navigator.scenesMap[name] + ".scene";
        }
        return "scenes/" + name + ".scene";
    };
    Navigator.prototype.makeDialogName = function (name) {
        if (name.indexOf('/') == 0) {
            return "scenes" + name + ".scene";
        }
        return "scenes/dialog/" + name + ".scene";
    };
    Navigator.prototype._open = function (sceneName, params, resURL, complete, progress, prepare, hidePre) {
        if (hidePre === void 0) { hidePre = true; }
        var urls = [];
        if (resURL instanceof Array) {
            urls = urls.concat(resURL);
        }
        else if (typeof resURL == 'string') {
            urls.push(resURL);
        }
        else if (resURL instanceof Laya.Handler) {
            complete = resURL;
            progress = complete;
            prepare = progress;
        }
        urls.push(this.makeSceneName(sceneName));
        Laya.Scene['_prepareHandler'] = prepare;
        Laya.Scene.open(urls, false, params, Laya.Handler.create(this, function (scene) {
            //handle pre scene
            if (this.scenes.length > 0) {
                var preScene = this.scenes[this.scenes.length - 1];
                preScene.visible = !hidePre;
                this._onDisappear();
            }
            scene.autoDestroyAtClosed = true;
            scene.sceneName = sceneName;
            this.visibleScene = scene;
            this.scenes.push(scene);
            this._onLoad();
            this._onAppear();
            complete && complete.runWith(scene);
        }), progress);
    };
    Navigator.setupLoadingPage = function (isFirstScene, cb) {
        var url = isFirstScene ? 'scenes/common/Loading/LoadingView.scene' : 'scenes/common/Loading/LoadWaitingView.scene';
        var page = Laya.Scene['_loadPage'];
        if (page && page.url == url)
            return;
        Laya.Scene.load(url, Laya.Handler.create(this, function (scene) {
            var stage = Laya.stage;
            var screenWidth = Laya.Browser.width;
            var screenHeight = Laya.Browser.height;
            var width = stage.designWidth;
            var height = stage.designHeight;
            var scaleX = screenWidth / width;
            var y = (screenHeight - height * scaleX >> 1) / scaleX;
            scene.y = Math.floor(y);
            Laya.Scene.setLoadingPage(scene);
            cb && cb();
        }));
    };
    Navigator.adjustViewPosition = function (view) {
        var stage = Laya.stage;
        var screenWidth = Laya.Browser.width;
        var screenHeight = Laya.Browser.height;
        var width = stage.designWidth;
        var height = stage.designHeight;
        var scaleX = screenWidth / width;
        var y = (screenHeight - height * scaleX >> 1) / scaleX;
        view.y = Math.floor(y);
    };
    /**================= dispatch system event =================**/
    Navigator.prototype._onReceiveMessage = function (cmd, value, code, message) {
        this._dispatchEvent('_onReceiveMessage', cmd, value);
    };
    Navigator.prototype._onReceiveSocketError = function (cmd, code, message) {
        this._dispatchEvent('_onReceiveMessage', cmd, code, message);
    };
    Navigator.prototype._onReceiveNotification = function (name, params) {
        this._dispatchEvent('_onReceiveNotification', name, params);
    };
    Navigator.prototype._onReceiveSocketClose = function () {
        if (!this.visibleScene)
            return;
        var components = this.visibleScene['_components'] || [], shareMsg = null;
        components.forEach(function (item) {
            if (item.onSocketClose) {
                item.onSocketClose();
            }
        });
    };
    Navigator.prototype._onReceiveNetworkChange = function (res) {
        this._dispatchEvent('onNetworkChange', res);
    };
    Navigator.prototype.onShareAppMessage = function () {
        if (!this.visibleScene)
            return;
        var components = this.visibleScene['_components'] || [], shareMsg = null;
        components.forEach(function (item) {
            if (item.onShareAppMessage) {
                shareMsg = item.onShareAppMessage();
            }
        });
        return shareMsg;
    };
    Navigator.prototype._onShow = function (res) {
        this._dispatchEvent('_onShow', res);
    };
    Navigator.prototype._onHide = function (res) {
        this._dispatchEvent('_onHide', res);
    };
    Navigator.prototype._onLoad = function () {
        this._dispatchEvent('_onLoad');
    };
    Navigator.prototype._onAppear = function () {
        this._dispatchEvent('_onAppear');
    };
    Navigator.prototype._onDisappear = function () {
        this._dispatchEvent('_onDisappear');
    };
    Navigator.prototype._dispatchEvent = function (method, p1, p2, p3, p4, p5) {
        if (!this.visibleScene)
            return;
        this.visibleScene.dispatchLifeCycleEvent(method, p1, p2, p3, p4, p5);
    };
    /**所有场景的map数据 */
    Navigator.scenesMap = {};
    return Navigator;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (Navigator);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataCenter = /** @class */ (function () {
    function DataCenter() {
    }
    /**CDN资源地址 */
    DataCenter.CDNURL = 'http://pt6kien6m.bkt.clouddn.com/';
    DataCenter.RESURL = 'http://pt6kien6m.bkt.clouddn.com/';
    DataCenter.showBannerAdWhenDialogPopup = true;
    return DataCenter;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataCenter);
/**
{
    "code": 200,
    "time": 1543495809,
    "message": "",
    "value": {
        "gender": "男",
        "member_province": "",
        "member_city": "",
        "resurrection_card": 1,
        "timing_url": "wss://lobby.xingqiu123.com/",
        "ladder_id": 0,
        "login_bonus": 0,
        "lobby_daily_first_login": false,
        "nickname": "渡",
        "mobile_bind_status": 0,
        "id": 108125,
        "is_first_game": 0,
        "member_country": "冰岛",
        "member_gold": 16041,
        "wx_bind_status": 1,
        "isProduction": 1,
        "is_new": false,
        "is_show": 1,
        "token": "ud0Hhhv+4Ek0mn3G+2vpWelog+aifGxzX0wNnbWRG2w=",
        "game_url": "wss://websocket.xingqiu123.com/",
        "app_game_url": "ws://websocket.xingqiu123.com:8443/",
        "member_rmb": "206.00",
        "member_integral": 934,
        "is_review": 0,
        "config_list": {
            "game": {
                "match_cost": 10,
                "introduce_time": 0,
                "ladder_config": [ ],
                "share_list": [
                    "我用三副同花顺碾压对家，快来赢红包领好礼！",
                    "99%的智慧+1%的运气，这！就是伯恩
"
                ],
                "game_time": 180,
                "name": "伯恩扑克",
                "match_type": [
                    {
                        "cost": 5,
                        "name": "新手场",
                        "limit": "7-100",
                        "reward_integral": 10,
                        "quick_limit": "0-50",
                        "id": 94,
                        "entry_fee": 2,
                        "status": 1
                    },
                    {
                        "cost": 20,
                        "name": "初级场",
                        "limit": "25-500",
                        "reward_integral": 10,
                        "quick_limit": "50-300",
                        "id": 95,
                        "entry_fee": 5,
                        "status": 1
                    },
                    {
                        "cost": 50,
                        "name": "中级场",
                        "limit": "60",
                        "reward_integral": 10,
                        "quick_limit": "300",
                        "id": 96,
                        "entry_fee": 10,
                        "status": 1
                    }
                ],
                "share_img": [
                    "game/share/1019_2.png",
                    "game/share/1019_1.png"
                ],
                "id": 1019,
                "jsonconfig": {
                    "match_info": {
                        "ladder": 0,
                        "pass": 0,
                        "ordinary": 1,
                        "share": 1,
                        "is_jump": 1,
                        "promotion": 0
                    },
                    "match_info_app": {
                        "ladder": 0,
                        "pass": 0,
                        "ordinary": 1,
                        "share": 1,
                        "is_jump": 1,
                        "promotion": 0
                    },
                    "share_task": "5;1&1-10#3&1-10#5&1-15",
                    "round_limit_count": "30",
                    "game_reward": "10-50;15-100"
                },
                "strategy": "当一方血量减为0时，则游戏结束;当轮到你操作的时候，一定要尽快操作，停留时间越长，扣血越多;使用小策略来消除多的道具砖块，来获得增益buff吧"
            },
            "common_config": {
                "share_info": [
                    {
                        "img": "wxgame/qrcode/hitmouse.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/da_di_shu.sk",
                        "appId": "wx17e66e26685ed5d0",
                        "game_id": 1004
                    },
                    {
                        "img": "wxgame/qrcode/petgo.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/men_chong.sk",
                        "appId": "wx28a78997b4784ef1",
                        "game_id": 1005
                    },
                    {
                        "img": "wxgame/qrcode/food.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/mei_shi_jia.sk",
                        "appId": "wx405ee3ea1e491440",
                        "game_id": 1006
                    },
                    {
                        "img": "wxgame/qrcode/reversi.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/fan_fan_le.sk",
                        "appId": "wx786d0c5f03d1c2fc",
                        "game_id": 1007
                    },
                    {
                        "img": "wxgame/qrcode/xiaoxl.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/xiao_xiao_le.sk",
                        "appId": "wx1fa0ca658a9a0ce6",
                        "game_id": 1008
                    },
                    {
                        "img": "wxgame/qrcode/jump.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/tiao_yi_tiao.sk",
                        "appId": "wxff74aa65beb1ba7e",
                        "game_id": 1009
                    },
                    {
                        "img": "wxgame/qrcode/onlyme.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/bi_wu_chang.sk",
                        "appId": "wxcaae4fff0e46aead",
                        "game_id": 1011
                    },
                    {
                        "img": "wxgame/qrcode/coupling.png",
                        "spine_url": "https://res.xingqiu123.com/wxgame/intro/chai_san_qing_lv.sk",
                        "appId": "wxa163f2723eef4ea3",
                        "game_id": 1012
                    }
                ],
                "hall_img": "wxgame/qrcode/hall.png"
            },
            "item_list": [
                {
                    "pao_gold": 100,
                    "price": 1,
                    "free_gold": 0,
                    "id": 13
                },
                {
                    "pao_gold": 600,
                    "price": 6,
                    "free_gold": 10,
                    "id": 14
                },
                {
                    "pao_gold": 1800,
                    "price": 18,
                    "free_gold": 50,
                    "id": 15
                },
                {
                    "pao_gold": 3000,
                    "price": 30,
                    "free_gold": 100,
                    "id": 16
                },
                {
                    "pao_gold": 9800,
                    "price": 98,
                    "free_gold": 388,
                    "id": 17
                },
                {
                    "pao_gold": 19800,
                    "price": 198,
                    "free_gold": 1288,
                    "id": 18
                }
            ]
        },
        "avstar": "https://wx.qlogo.cn/mmopen/vi_32/ECOJ2KphCSiajao15elMo77txvPhpMqhLFsF2MOPM1FJxmVYRlSQCdv8icicPCPic69ibOQFIewKibMmgkQtokAEibrxA/132",
        "age": 18,
        "is_receive_boy": 0,
        "app_timing_url": "ws://lobby.xingqiu123.com:8443/"
    }
}
 */ 


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimerService = /** @class */ (function (_super) {
    __extends(TimerService, _super);
    /**
     *
     * @param duration 如果为倒计时，则为最大可倒计时；如果为正计时，则为最大可正计时
     * @param interval 步进时间
     * @param up 是否为正计时，默认为倒计时
     */
    function TimerService(duration, interval, up) {
        if (interval === void 0) { interval = 1; }
        if (up === void 0) { up = false; }
        var _this = _super.call(this) || this;
        _this.duration = duration;
        _this.interval = interval;
        _this.up = up;
        _this.curTime = 0;
        return _this;
    }
    TimerService.prototype.start = function () {
        this.curTime = this.up ? 0 : this.duration;
        this.update();
        Laya.timer.loop(this.interval * 1000, this, this.update);
        this.event(TimerService.START, "");
    };
    TimerService.prototype.stop = function () {
        this.curTime = 0;
        Laya.timer.clear(this, this.update);
        this.event(TimerService.STOP, "");
    };
    TimerService.prototype.update = function () {
        if (this.up) {
            this.curTime++;
            if (this.curTime >= this.duration) {
                this.stop();
            }
            else {
                this.event(TimerService.PROGRESS, this.curTime);
            }
        }
        else {
            if (this.curTime > 0) {
                this.curTime--;
                this.event(TimerService.PROGRESS, this.curTime);
            }
            else {
                this.stop();
            }
        }
    };
    TimerService.START = "start_";
    TimerService.STOP = "stop_";
    TimerService.TIMEOUT = "timeout_";
    TimerService.PROGRESS = "progress_";
    return TimerService;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (TimerService);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 游戏启动时的加载页面
 */
var LaunchScreenView = /** @class */ (function (_super) {
    __extends(LaunchScreenView, _super);
    function LaunchScreenView() {
        var _this = _super.call(this) || this;
        _this.setup();
        Laya.updateTimer.frameLoop(1, _this, _this.onUpdate);
        return _this;
    }
    LaunchScreenView.prototype.setup = function () {
        this.size(640, 1136);
        var box = new Laya.Box();
        box.size(640, 1136);
        box.cacheAs = 'normal';
        this.addChild(box);
        var spriteBg = new Laya.Sprite();
        spriteBg.graphics.drawRect(0, 0, 640, 1136, "#ffffff");
        spriteBg.alpha = 0.5;
        box.addChild(spriteBg);
        this.spriteBg = spriteBg;
        var progressView = new Laya.Image('local/common/loading.png');
        progressView.pivot(50, 50);
        progressView.pos(320, 463);
        progressView.size(100, 100);
        this._progressView = progressView;
        box.addChild(progressView);
        var lblProgress = new Laya.Label('0%');
        lblProgress.color = '#ffffff';
        lblProgress.fontSize = 25;
        lblProgress.centerX = 0;
        lblProgress.y = 509;
        box.addChild(lblProgress);
        this._lblProgress = lblProgress;
    };
    LaunchScreenView.prototype.onUpdate = function () {
        this._progressView.rotation += 5;
    };
    LaunchScreenView.setProgress = function (progress) {
        if (!this.ins)
            return;
        this.setTips(Math.ceil(progress * 100) + "%");
    };
    LaunchScreenView.setTips = function (tip) {
        this.ins._lblProgress.text = tip;
    };
    LaunchScreenView.Settlement = function () {
        this.ins.spriteBg.graphics.clear();
        this.ins.spriteBg.graphics.drawRect(0, 0, 640, 1200, "#000000");
        this.setTips('结算中');
    };
    LaunchScreenView.show = function () {
        var view = new LaunchScreenView();
        _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_0__["default"].adjustViewPosition(view);
        view.zOrder = 999;
        Laya.stage.addChild(view);
        this.ins = view;
    };
    LaunchScreenView.hide = function () {
        Laya.updateTimer.clearAll(this.ins);
        if (this.ins) {
            this.ins.destroy();
        }
    };
    return LaunchScreenView;
}(Laya.View));
/* harmony default export */ __webpack_exports__["default"] = (LaunchScreenView);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_DataCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _game_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
    * 便捷生成图片数组，主要用于名称连续的图片
    * @param {用来组织图片的格式,用%i占位} format
    * @param {开始索引} start
    * @param {结束索引} end
    */
    Utils.makeImagesWithFormat = function (format, start, end) {
        var images = [];
        for (var i = start; i < end; i++) {
            images.push(format.replace("%i", String(i)));
        }
        return images;
    };
    Utils.toQueryString = function (params) {
        var items = [], queryStr = "";
        for (var key in params) {
            items.push(key + "=" + params[key]);
        }
        if (items.length) {
            queryStr = items.join("&");
        }
        return queryStr;
    };
    Utils.makeGenderIcon = function (gender) {
        var icon = "local/common/gay-white.png";
        if (gender == "男") {
            icon = "local/common/boy-white.png";
        }
        else if (gender == "女") {
            icon = "local/common/girl-white.png";
        }
        // switch (gender) {
        //     case "男":
        //         icon = "wxlocal/Common/boy-white.png"
        //         break
        //     case "女":
        //         icon = "wxlocal/Common/boy-white.png"
        //         break
        //     default:
        //         icon = "wxlocal/Common/gay-white.png"
        //         break
        // }
        return icon;
    };
    Utils.findUserByID = function (users, id) {
        var result = users.filter(function (user, index) {
            return user.user_id && (user.user_id == id);
        });
        if (result.length) {
            return result[0];
        }
        console.error('');
        return null;
    };
    //圆角矩形
    Utils.makeRoundRectPath = function (width, height, r, corner) {
        var path = [];
        if (corner & _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerTopLeft) {
            path.push(["moveTo", r, 0]);
        }
        else {
            path.push(["moveTo", 0, 0]);
        }
        if (corner & _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerTopRight) {
            path.push(["lineTo", width - r, 0]);
            path.push(["arcTo", width, 0, width, r, r]);
        }
        else {
            path.push(["lineTo", width, 0]);
        }
        if (corner & _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerBottomRight) {
            path.push(["lineTo", width, height - r]);
            path.push(["arcTo", width, height, width - r, height, r]);
        }
        else {
            path.push(["lineTo", width, height]);
        }
        if (corner & _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerBottomLeft) {
            path.push(["lineTo", r, height]);
            path.push(["arcTo", 0, height, 0, height - r, r]);
        }
        else {
            path.push(["lineTo", 0, height]);
        }
        if (corner & _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerTopLeft) {
            path.push(["lineTo", 0, r]);
            path.push(["arcTo", 0, 0, r, 0, r]);
        }
        else {
            path.push(["lineTo", 0, 0]);
        }
        path.push(["closePath"]);
        return path;
    };
    Utils.makeAllCornerRoundRectPath = function (w, h, r) {
        return this.makeRoundRectPath(w, h, r, _game_enums__WEBPACK_IMPORTED_MODULE_1__["RectCorner"].RectCornerAllCorners);
    };
    /**用于保留指定长度的字符串，其余用...表示 */
    Utils.formatName = function (name, length) {
        if (length === void 0) { length = 10; }
        var r = /[^\x00-\xff]/g;
        if (name.replace(r, "mm").length <= length) {
            return name + "";
        }
        var m = Math.floor(length / 2);
        for (var i = m; i < name.length; i++) {
            if (name.substring(0, i).replace(r, "mm").length >= length) {
                return name.substring(0, i) + "...";
            }
        }
        return name + "";
    };
    /**只用于显示用户头像 */
    Utils.makeIcon = function (icon, width) {
        if (width === void 0) { width = 96; }
        if (icon == "") {
            return "local/common/avstar.png";
        }
        if (icon.indexOf('Game') == 0) { //GameRes 或 GameSandBox
            if (window['BK']) {
                return icon;
            }
            else {
                return '';
            }
        }
        if (icon.indexOf('http') === 0) {
            var items = icon.split("/") || [];
            if (items.length > 1) {
                var str = items[items.length - 1];
                if (str === "0") {
                    items[items.length - 1] = width > 100 ? "132" : "96";
                }
                return items.join('/');
            }
            return icon + "";
        }
        else {
            if (!_game_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL) {
                console.error('you must assign value to [PaoYa.DataCenter.CDNURL]');
                return;
            }
            return _game_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL + icon + "?imageView2/0/w/" + width;
        }
    };
    /**用于完全拼接用户的头像地址 */
    Utils.makeResourceURL = function (url) {
        if (url == "") {
            return "local/common/avstar.png";
        }
        if (url.indexOf('https') === 0) {
            return url + "";
        }
        else {
            if (!_game_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL) {
                console.error('you must assign value to [PaoYa.DataCenter.CDNURL]');
                return;
            }
            return _game_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL + url;
        }
    };
    /** 计算文字宽度 */
    Utils.measureWidth = function (text) {
        var measureResult = Laya.Utils.measureText(text, 'Arial');
        return measureResult.width;
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeType", function() { return PrizeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareType", function() { return ShareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectCorner", function() { return RectCorner; });
var PrizeType;
(function (PrizeType) {
    PrizeType[PrizeType["Gold"] = 1] = "Gold";
    PrizeType[PrizeType["Money"] = 2] = "Money";
})(PrizeType || (PrizeType = {}));
var ShareType;
(function (ShareType) {
    ShareType[ShareType["InviteFriend"] = 1] = "InviteFriend";
    ShareType[ShareType["GroupPK"] = 2] = "GroupPK";
    ShareType[ShareType["GroupRank"] = 3] = "GroupRank";
})(ShareType || (ShareType = {}));
var RectCorner;
(function (RectCorner) {
    RectCorner[RectCorner["RectCornerTopLeft"] = 1] = "RectCornerTopLeft";
    RectCorner[RectCorner["RectCornerTopRight"] = 2] = "RectCornerTopRight";
    RectCorner[RectCorner["RectCornerBottomLeft"] = 4] = "RectCornerBottomLeft";
    RectCorner[RectCorner["RectCornerBottomRight"] = 8] = "RectCornerBottomRight";
    RectCorner[RectCorner["RectCornerAllCorners"] = 15] = "RectCornerAllCorners";
})(RectCorner || (RectCorner = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**返回数组中最后一个元素，如果数组为空，返回null */
Object.defineProperty(Array.prototype, "lastObject", {
    configurable: false,
    enumerable: false,
    get: function () {
        if (!this.length) {
            return null;
        }
        return this[this.length - 1];
    }
});
/**随机返回数组中一个元素，如果数组为空，返回null */
Object.defineProperty(Array.prototype, "randomItem", {
    configurable: false,
    enumerable: false,
    get: function () {
        if (!this.length) {
            return null;
        }
        var index = Math.floor(Math.random() * this.length);
        return this[index];
    }
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 *
 * @param {时间格式，如“yyyy-mm-dd hh:mm:ss”} format
 */
Date.prototype.formatWithStyle = function (format) {
    var y = this.getFullYear();
    var m = this.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = this.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = this.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = this.getMinutes();
    var second = this.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    format = format.replace("yyyy", y + "");
    format = format.replace("mm", m + '');
    format = format.replace("dd", d + '');
    format = format.replace('hh', h + '');
    format = format.replace('mm', minute + '');
    format = format.replace('ss', second + '');
    return format;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * 格式化秒数，如 1000s = 00:16:40
 */
Number.prototype.formatTime = function (format) {
    if (format === void 0) { format = 'H:M:S'; }
    var seconds = this;
    seconds = Math.floor(seconds);
    var hour = Math.floor(seconds / 3600);
    var hourStr = hour < 10 ? ("0" + hour) : hour + '';
    var balance = seconds % 3600;
    var minute = Math.floor(balance / 60);
    var minuteStr = minute < 10 ? ("0" + minute) : minute + '';
    var second = balance % 60;
    var secondStr = second < 10 ? ("0" + second) : second + '';
    if (format.indexOf('H') != -1) {
        format = format.replace(/H/, hourStr);
    }
    if (format.indexOf('M') != -1) {
        format = format.replace(/M/, minuteStr);
    }
    if (format.indexOf('S') != -1) {
        format = format.replace(/S/, secondStr);
    }
    return format;
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

Laya.View.prototype.createViewFromJSON = function (url, complete) {
    var _this = this;
    if (!url)
        return;
    var type = Laya.Utils.getFileExtension(url);
    type || (url += '.json');
    Laya.loader.resetProgress();
    var loader = new Laya.SceneLoader();
    loader.on(Laya.Event.COMPLETE, null, function () {
        var obj = Laya.Loader.getRes(url);
        if (!obj)
            throw "Can not find scene:" + url;
        if (!_this._getBit(/*laya.Const.NOT_READY*/ 0x08)) {
            console.warn('Scene has been Ready!!!');
            _this.event(Laya.Event.READY, _this);
            complete && complete.runWith(null);
        }
        else {
            _this.on('onViewCreated', null, function () {
                _this.event(Laya.Event.READY, _this);
                complete && complete.runWith(null);
            });
            _this.createView(obj);
        }
    });
    loader.load(url);
};
var LAST_CLICK_TIME = '_last_click_time';
Laya.Node.prototype.addClickListener = function (caller, method, throttle, fail) {
    if (throttle === void 0) { throttle = false; }
    caller || (caller = {});
    return this.on(Laya.Event.CLICK, this, function (args) {
        if (!throttle) {
            method.call(caller, args);
            return;
        }
        var now = Date.now(), time = caller[LAST_CLICK_TIME] || 0, delta = now - time;
        if (delta > 1000) {
            method.call(caller, args);
        }
        else {
            fail && fail.call(caller, '操作速度过快');
            console.warn('操作点击过快');
        }
        caller[LAST_CLICK_TIME] = now;
    });
};
Laya.Node.prototype.dispatchLifeCycleEvent = function (method, p1, p2, p3, p4, p5) {
    this.dispatchComponentEvent(method, p1, p2, p3, p4, p5);
    if (!this.destroyed) {
        for (var i = 0, length_1 = this.numChildren; i < length_1; i++) {
            var child = this.getChildAt(i);
            child.dispatchComponentEvent(method, p1, p2, p3, p4, p5);
        }
    }
    if (this[method]) {
        this[method](p1, p2, p3, p4, p5);
    }
};
Laya.Node.prototype.dispatchComponentEvent = function (method, p1, p2, p3, p4, p5) {
    var components = this['_components'] || [];
    components.forEach(function (item) {
        if (item[method] && item.enabled) {
            item[method](p1, p2, p3, p4, p5);
        }
    });
};
Laya.Sprite.prototype.drawBackground = function () {
    this.graphics.clear();
    this.graphics.drawPath(0, 0, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].makeRoundRectPath(this.width, this.height, this._cornerRadius || 0, PaoYa.RectCorner.RectCornerAllCorners), {
        fillStyle: this._backgroundColor
    });
};
Laya.Scene.load = function (url, complete, progress) {
    Laya.loader.resetProgress();
    var loader = new Laya.SceneLoader();
    loader.on(/*laya.events.Event.PROGRESS*/ "progress", null, onProgress);
    loader.once(/*laya.events.Event.COMPLETE*/ "complete", null, done);
    loader.load(url);
    function onProgress(value) {
        if (Laya.Scene['_loadPage'])
            Laya.Scene['_loadPage'].event("progress", value);
        progress && progress.runWith(value);
    }
    function done() {
        if (Laya.Scene['_prepareHandler']) {
            var prepare = Laya.Scene['_prepareHandler'];
            if (typeof prepare == 'function') {
                prepare();
                create();
            }
            else if (typeof prepare == 'object') {
                if (prepare['async']) {
                    prepare['async'](function () {
                        create();
                    });
                }
                else {
                    prepare['sync']();
                    create();
                }
            }
        }
        else {
            create();
        }
    }
    function create() {
        Laya.Scene['_prepareHandler'] = null;
        loader.off(/*laya.events.Event.PROGRESS*/ "progress", null, onProgress);
        var p = url;
        if (p instanceof Array) {
            url = p[p.length - 1];
        }
        var obj = Laya.Loader.getRes(url);
        if (!obj)
            throw "Can not find scene:" + url;
        if (!obj.props)
            throw "Scene data is error:" + url;
        var runtime = obj.props.runtime ? obj.props.runtime : obj.type;
        var clas = Laya.ClassUtils.getClass(runtime);
        if (obj.props.renderType == "instance") {
            var scene = clas.instance || (clas.instance = new clas());
        }
        else {
            scene = new clas();
        }
        if (scene && (scene instanceof laya.display.Node)) {
            scene.url = url;
            if (!scene._getBit(/*laya.Const.NOT_READY*/ 0x08)) {
                complete && complete.runWith(scene);
                Laya.Scene.hideLoadingPage();
            }
            else {
                scene.on("onViewCreated", null, function () {
                    Laya.Scene.hideLoadingPage();
                    complete && complete.runWith(scene);
                });
                scene.createView(obj);
            }
        }
        else {
            throw "Can not find scene:" + runtime;
        }
    }
};
/**为指定的Sprite添加背景色，使用时需要先确定该Sprite的宽高 */
Object.defineProperty(Laya.Sprite.prototype, "backgroundColor", {
    configurable: false,
    enumerable: false,
    get: function () {
        return this._backgroundColor || null;
    },
    set: function (color) {
        if (!color || (color == this._backgroundColor))
            return;
        this._backgroundColor = color;
        // this._bgSprite = this._bgSprite || this.addChildAt(new Laya.Sprite(),0)
        Laya.timer.callLater(this, this.drawBackground);
    }
});
/**为指定的Sprite添加圆角，使用时需要先确定该Sprite的宽高，一般配合backgroundColor一起使用 */
Object.defineProperty(Laya.Sprite.prototype, "cornerRadius", {
    configurable: false,
    enumerable: false,
    get: function () {
        return this._cornerRadius || 0;
    },
    set: function (radius) {
        if (!radius || (this._cornerRadius == radius))
            return;
        this._cornerRadius = radius;
        // this._bgSprite = this._bgSprite || this.addChildAt(new Laya.Sprite(),0)
        Laya.timer.callLater(this, this.drawBackground);
    }
});


/***/ })
/******/ ]);