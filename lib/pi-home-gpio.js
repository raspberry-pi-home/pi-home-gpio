(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pi-home-gpio", [], factory);
	else if(typeof exports === 'object')
		exports["pi-home-gpio"] = factory();
	else
		root["pi-home-gpio"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rwlock/lib/lock.js":
/*!*****************************************!*\
  !*** ./node_modules/rwlock/lib/lock.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! ReadWriteLock - v5.0.0 - 2015-01-16\n * Author: Alberto La Rocca <a71104@gmail.com> (https://github.com/71104)\n * Released under the MIT license\n * Copyright (c) 2015 Alberto La Rocca */\nmodule.exports=function(){\"use strict\";function a(){this.readers=0,this.queue=[]}function b(b,c,f){var g;\"function\"!=typeof b?(e.hasOwnProperty(b)||(e[b]=new a),g=e[b]):(f=c,c=b,g=d),f||(f={});var h=null;f.hasOwnProperty(\"scope\")&&(h=f.scope);var i=function(){var a=!1;return function(){a||(a=!0,g.readers--,g.queue.length&&g.queue[0]())}}();if(g.readers<0||g.queue.length){var j=!1;if(g.queue.push(function(){!j&&g.readers>=0&&(j=!0,g.queue.shift(),g.readers++,c.call(h,i),g.queue.length&&g.queue[0]())}),f.hasOwnProperty(\"timeout\")){var k=null;f.hasOwnProperty(\"timeoutCallback\")&&(k=f.timeoutCallback),setTimeout(function(){j||(j=!0,g.queue.shift(),k&&k.call(f.scope))},f.timeout)}}else g.readers++,c.call(f.scope,i)}function c(b,c,f){var g;\"function\"!=typeof b?(e.hasOwnProperty(b)||(e[b]=new a),g=e[b]):(f=c,c=b,g=d),f||(f={});var h=null;f.hasOwnProperty(\"scope\")&&(h=f.scope);var i=function(){var a=!1;return function(){a||(a=!0,g.readers=0,g.queue.length&&g.queue[0]())}}();if(g.readers||g.queue.length){var j=!1;if(g.queue.push(function(){j||g.readers||(j=!0,g.queue.shift(),g.readers=-1,c.call(f.scope,i))}),f.hasOwnProperty(\"timeout\")){var k=null;f.hasOwnProperty(\"timeoutCallback\")&&(k=f.timeoutCallback),setTimeout(function(){j||(j=!0,g.queue.shift(),k&&k.call(h))},f.timeout)}}else g.readers=-1,c.call(f.scope,i)}var d=new a,e={};this.readLock=b,this.writeLock=c,this.async={readLock:function(a,c,d){\"function\"!=typeof a?b(a,function(a){c.call(this,null,a)},d):(c=a,d=c,b(function(a){c.call(this,null,a)},d))},writeLock:function(a,b,d){\"function\"!=typeof a?c(a,function(a){b.call(this,null,a)},d):(b=a,d=b,c(function(a){b.call(this,null,a)},d))}}};\n\n//# sourceURL=webpack://pi-home-gpio/./node_modules/rwlock/lib/lock.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Button = function Button() {\n  _classCallCheck(this, Button);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack://pi-home-gpio/./src/button.js?");

/***/ }),

/***/ "./src/device.js":
/*!***********************!*\
  !*** ./src/device.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Device = function () {\n    function Device() {\n        _classCallCheck(this, Device);\n    }\n\n    Device.prototype._checkOpen = function _checkOpen() {\n        if (this.closed()) {\n            throw new Error('is closed or uninitialized');\n        }\n    };\n\n    Device.prototype.isActive = function isActive() {\n        return this.value !== undefined;\n    };\n\n    Device.prototype.value = function value() {\n        throw new Error('Not Implemented');\n    };\n\n    Device.prototype.close = function close() {\n        return;\n    };\n\n    return Device;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Device);\n\n//# sourceURL=webpack://pi-home-gpio/./src/device.js?");

/***/ }),

/***/ "./src/digitalOutputDevice.js":
/*!************************************!*\
  !*** ./src/digitalOutputDevice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _outputDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputDevice */ \"./src/outputDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar DigitalOutputDevice = function (_OutputDevice) {\n    _inherits(DigitalOutputDevice, _OutputDevice);\n\n    function DigitalOutputDevice(pin) {\n        var activeHigh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n        var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        _classCallCheck(this, DigitalOutputDevice);\n\n        return _possibleConstructorReturn(this, _OutputDevice.call(this, pin, activeHigh, initialValue));\n    }\n\n    DigitalOutputDevice.prototype.blink = function blink(onTime, offTime, times, callback) {\n        this._pin.blink(onTime, offTime, times, callback);\n    };\n\n    return DigitalOutputDevice;\n}(_outputDevice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DigitalOutputDevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/digitalOutputDevice.js?");

/***/ }),

/***/ "./src/gpioDevice.js":
/*!***************************!*\
  !*** ./src/gpioDevice.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rwlock */ \"./node_modules/rwlock/lib/lock.js\");\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rwlock__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ \"./src/device.js\");\n/* harmony import */ var _physicalPin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicalPin */ \"./src/physicalPin.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar GPIODevice = function (_Device) {\n    _inherits(GPIODevice, _Device);\n\n    function GPIODevice(pin) {\n        _classCallCheck(this, GPIODevice);\n\n        var _this = _possibleConstructorReturn(this, _Device.call(this));\n\n        _this._PINS = new Set();\n        _this._PINS_LOCK = new rwlock__WEBPACK_IMPORTED_MODULE_0___default.a();\n\n        var physicalPin = void 0;\n\n        if (!pin) {\n            throw new Error('No pin given');\n        }\n        if (Number.isInteger(pin)) {\n            physicalPin = new _physicalPin__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pin);\n        }\n\n        _this._PINS_LOCK.readLock(function (release) {\n            if (_this._PINS.has(physicalPin)) {\n                throw new Error('pin ' + pin.toString() + ' is already in use by another gpiozero object');\n            }\n            _this._PINS.add(physicalPin);\n            release();\n        });\n\n        _this._pin = physicalPin;\n        _this._activeState = true;\n        _this._inactiveState = false;\n        return _this;\n    }\n\n    GPIODevice.prototype._read = function _read() {\n        this._checkOpen();\n        return this._stateToValue(this.pin().state());\n    };\n\n    GPIODevice.prototype._stateToValue = function _stateToValue(state) {\n        return Boolean(state === this._activeState);\n    };\n\n    GPIODevice.prototype.close = function close() {\n        var _this2 = this;\n\n        this._PINS_LOCK.readLock(function (release) {\n            var pin = _this2._pin;\n\n            if (_this2._PINS.has(pin)) {\n                _this2._PINS.delete(pin);\n                _this2._pin.close();\n            }\n            _this2._pin = undefined;\n            release();\n        });\n    };\n\n    GPIODevice.prototype.closed = function closed() {\n        return this._pin === undefined;\n    };\n\n    GPIODevice.prototype.pin = function pin() {\n        return this._pin;\n    };\n\n    GPIODevice.prototype.value = function value() {\n        return this._read();\n    };\n\n    GPIODevice.prototype.isActive = function isActive() {\n        return Boolean(this.value());\n    };\n\n    GPIODevice.prototype.toString = function toString() {\n        return '<gpiozero.GPIODevice object on pin ' + this._pin._number.toString() + ' isActive=' + this.isActive() + '>';\n    };\n\n    return GPIODevice;\n}(_device__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GPIODevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/gpioDevice.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Button, Led, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _led__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./led */ \"./src/led.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Led\", function() { return _led__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nvar gpio = function gpio() {\n    return 'gpio';\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gpio);\n\n//# sourceURL=webpack://pi-home-gpio/./src/index.js?");

/***/ }),

/***/ "./src/led.js":
/*!********************!*\
  !*** ./src/led.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _digitalOutputDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitalOutputDevice */ \"./src/digitalOutputDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Led = function (_DigitalOutputDevice) {\n    _inherits(Led, _DigitalOutputDevice);\n\n    function Led(pin) {\n        var activeHigh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n        var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        _classCallCheck(this, Led);\n\n        return _possibleConstructorReturn(this, _DigitalOutputDevice.call(this, pin, activeHigh, initialValue));\n    }\n\n    return Led;\n}(_digitalOutputDevice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Led);\n\n//# sourceURL=webpack://pi-home-gpio/./src/led.js?");

/***/ }),

/***/ "./src/outputDevice.js":
/*!*****************************!*\
  !*** ./src/outputDevice.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rwlock */ \"./node_modules/rwlock/lib/lock.js\");\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rwlock__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gpioDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gpioDevice */ \"./src/gpioDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar OutputDevice = function (_GPIODevice) {\n    _inherits(OutputDevice, _GPIODevice);\n\n    function OutputDevice(pin) {\n        var activeHigh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n        var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        _classCallCheck(this, OutputDevice);\n\n        var _this = _possibleConstructorReturn(this, _GPIODevice.call(this, pin));\n\n        _this._lock = new rwlock__WEBPACK_IMPORTED_MODULE_0___default.a();\n\n        _this.activeHigh(activeHigh);\n\n        _this._pin.output_with_state(_this._valueToState(initialValue));\n        return _this;\n    }\n\n    OutputDevice.prototype._activeHigh = function _activeHigh(value) {\n        this._activeState = value;\n        this._inactiveState = !value;\n    };\n\n    OutputDevice.prototype._valueToState = function _valueToState(value) {\n        return value ? this._activeState : this._inactiveState;\n    };\n\n    OutputDevice.prototype._write = function _write(value) {\n        this._checkOpen(this);\n        this._pin.state(this._valueToState(value));\n    };\n\n    OutputDevice.prototype.on = function on() {\n        this._pin._stop_blink();\n        this._write(true);\n    };\n\n    OutputDevice.prototype.off = function off() {\n        this._pin._stop_blink();\n        this._write(false);\n    };\n\n    OutputDevice.prototype.value = function value(_value) {\n        if (!_value) {\n            return this._read();\n        }\n\n        this._pin._stop_blink();\n        this._write(_value);\n\n        return _value;\n    };\n\n    OutputDevice.prototype.toggle = function toggle() {\n        var _this2 = this;\n\n        this._lock.readLock(function (release) {\n            if (_this2.isActive()) {\n                _this2.off();\n            } else {\n                _this2.on();\n            }\n            release();\n        });\n    };\n\n    return OutputDevice;\n}(_gpioDevice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutputDevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/outputDevice.js?");

/***/ }),

/***/ "./src/physicalPin.js":
/*!****************************!*\
  !*** ./src/physicalPin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pin */ \"./src/pin.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar PhysicalPin = function (_Pin) {\n  _inherits(PhysicalPin, _Pin);\n\n  function PhysicalPin() {\n    _classCallCheck(this, PhysicalPin);\n\n    return _possibleConstructorReturn(this, _Pin.apply(this, arguments));\n  }\n\n  return PhysicalPin;\n}(_pin__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhysicalPin);\n\n//# sourceURL=webpack://pi-home-gpio/./src/physicalPin.js?");

/***/ }),

/***/ "./src/pin.js":
/*!********************!*\
  !*** ./src/pin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Pin = function Pin() {\n  _classCallCheck(this, Pin);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pin);\n\n//# sourceURL=webpack://pi-home-gpio/./src/pin.js?");

/***/ })

/******/ });
});