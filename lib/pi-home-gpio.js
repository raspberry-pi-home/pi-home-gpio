(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("wiringpi-node"));
	else if(typeof define === 'function' && define.amd)
		define("pi-home-gpio", ["wiringpi-node"], factory);
	else if(typeof exports === 'object')
		exports["pi-home-gpio"] = factory(require("wiringpi-node"));
	else
		root["pi-home-gpio"] = factory(root["wiringpi-node"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_wiringpi_node__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _outputDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputDevice */ \"./src/outputDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar noop = function noop() {\n    return {};\n};\n\nvar DigitalOutputDevice = function (_OutputDevice) {\n    _inherits(DigitalOutputDevice, _OutputDevice);\n\n    function DigitalOutputDevice() {\n        _classCallCheck(this, DigitalOutputDevice);\n\n        return _possibleConstructorReturn(this, _OutputDevice.apply(this, arguments));\n    }\n\n    DigitalOutputDevice.prototype.blink = function blink() {\n        var onTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n        var offTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n        var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n        var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;\n\n        this._pin.blink(onTime, offTime, times, callback);\n    };\n\n    return DigitalOutputDevice;\n}(_outputDevice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DigitalOutputDevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/digitalOutputDevice.js?");

/***/ }),

/***/ "./src/gpioDevice.js":
/*!***************************!*\
  !*** ./src/gpioDevice.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rwlock */ \"./node_modules/rwlock/lib/lock.js\");\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rwlock__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ \"./src/device.js\");\n/* harmony import */ var _physicalPin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicalPin */ \"./src/physicalPin.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar _PINS = new Set();\nvar _PINS_LOCK = new rwlock__WEBPACK_IMPORTED_MODULE_0___default.a();\n\nvar GPIODevice = function (_Device) {\n    _inherits(GPIODevice, _Device);\n\n    function GPIODevice(pin) {\n        _classCallCheck(this, GPIODevice);\n\n        var _this = _possibleConstructorReturn(this, _Device.call(this));\n\n        var physicalPin = void 0;\n\n        if (!pin) {\n            throw new Error('No pin given');\n        }\n\n        if (Number.isInteger(pin)) {\n            physicalPin = new _physicalPin__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pin);\n        }\n\n        _PINS_LOCK.readLock(function (release) {\n            if (_PINS.has(physicalPin)) {\n                throw new Error('pin ' + pin.toString() + ' is already in use by another gpiozero object');\n            }\n            _PINS.add(physicalPin);\n            release();\n        });\n\n        _this._pin = physicalPin;\n        _this._activeState = true;\n        _this._inactiveState = false;\n        return _this;\n    }\n\n    GPIODevice.prototype._read = function _read() {\n        this._checkOpen();\n        return this._stateToValue(this.pin().state());\n    };\n\n    GPIODevice.prototype._stateToValue = function _stateToValue(state) {\n        return Boolean(state === this._activeState);\n    };\n\n    GPIODevice.prototype.close = function close() {\n        var _this2 = this;\n\n        _PINS_LOCK.readLock(function (release) {\n            var pin = _this2._pin;\n\n            if (_PINS.has(pin)) {\n                _PINS.delete(pin);\n                _this2._pin.close();\n            }\n            _this2._pin = undefined;\n            release();\n        });\n    };\n\n    GPIODevice.prototype.closed = function closed() {\n        return this._pin === undefined;\n    };\n\n    GPIODevice.prototype.pin = function pin() {\n        return this._pin;\n    };\n\n    GPIODevice.prototype.value = function value() {\n        return this._read();\n    };\n\n    GPIODevice.prototype.isActive = function isActive() {\n        return Boolean(this.value());\n    };\n\n    GPIODevice.prototype.toString = function toString() {\n        return '<gpiozero.GPIODevice object on pin ' + this._pin._number.toString() + ' isActive=' + this.isActive() + '>';\n    };\n\n    return GPIODevice;\n}(_device__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GPIODevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/gpioDevice.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _digitalOutputDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitalOutputDevice */ \"./src/digitalOutputDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Led = function (_DigitalOutputDevice) {\n  _inherits(Led, _DigitalOutputDevice);\n\n  function Led() {\n    _classCallCheck(this, Led);\n\n    return _possibleConstructorReturn(this, _DigitalOutputDevice.apply(this, arguments));\n  }\n\n  return Led;\n}(_digitalOutputDevice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Led);\n\n//# sourceURL=webpack://pi-home-gpio/./src/led.js?");

/***/ }),

/***/ "./src/outputDevice.js":
/*!*****************************!*\
  !*** ./src/outputDevice.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rwlock */ \"./node_modules/rwlock/lib/lock.js\");\n/* harmony import */ var rwlock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rwlock__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wiringpi_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wiringpi-node */ \"wiringpi-node\");\n/* harmony import */ var wiringpi_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wiringpi_node__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gpioDevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gpioDevice */ \"./src/gpioDevice.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar OutputDevice = function (_GPIODevice) {\n    _inherits(OutputDevice, _GPIODevice);\n\n    function OutputDevice(pin) {\n        var activeHigh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"HIGH\"];\n        var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"LOW\"];\n\n        _classCallCheck(this, OutputDevice);\n\n        var _this = _possibleConstructorReturn(this, _GPIODevice.call(this, pin));\n\n        _this._lock = new rwlock__WEBPACK_IMPORTED_MODULE_0___default.a();\n\n        _this._activeHigh(activeHigh);\n\n        _this._pin.outputWithState(_this._valueToState(initialValue));\n        return _this;\n    }\n\n    OutputDevice.prototype._activeHigh = function _activeHigh(value) {\n        this._activeState = value ? wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"HIGH\"] : wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"LOW\"];\n        this._inactiveState = value ? wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"LOW\"] : wiringpi_node__WEBPACK_IMPORTED_MODULE_1__[\"HIGH\"];\n    };\n\n    OutputDevice.prototype._valueToState = function _valueToState(value) {\n        return value ? this._activeState : this._inactiveState;\n    };\n\n    OutputDevice.prototype._write = function _write(value) {\n        this._checkOpen(this);\n        this._pin.state(this._valueToState(value));\n    };\n\n    OutputDevice.prototype.on = function on() {\n        this._pin.stopBlink();\n        this._write(true);\n    };\n\n    OutputDevice.prototype.off = function off() {\n        this._pin.stopBlink();\n        this._write(false);\n    };\n\n    OutputDevice.prototype.value = function value(_value) {\n        if (!_value) {\n            return this._read();\n        }\n\n        this._pin.stopBlink();\n        this._write(_value);\n\n        return _value;\n    };\n\n    OutputDevice.prototype.toggle = function toggle() {\n        var _this2 = this;\n\n        this._lock.readLock(function (release) {\n            if (_this2.isActive()) {\n                _this2.off();\n            } else {\n                _this2.on();\n            }\n            release();\n        });\n    };\n\n    return OutputDevice;\n}(_gpioDevice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutputDevice);\n\n//# sourceURL=webpack://pi-home-gpio/./src/outputDevice.js?");

/***/ }),

/***/ "./src/physicalPin.js":
/*!****************************!*\
  !*** ./src/physicalPin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wiringpi_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wiringpi-node */ \"wiringpi-node\");\n/* harmony import */ var wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wiringpi_node__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pin */ \"./src/pin.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar _PINS = {};\nvar GPIO_FUNCTIONS = {\n    'input': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.INPUT,\n    'output': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.OUTPUT,\n    'pwm': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.PWM_OUTPUT\n};\nvar GPIO_PULL_UPS = {\n    'up': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.PUD_UP,\n    'down': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.PUD_DOWN,\n    'floating': wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.PUD_OFF\n};\nvar WIRING_PI = undefined;\nvar PI_INFO = undefined;\n\nvar PhysicalPin = function (_Pin) {\n    _inherits(PhysicalPin, _Pin);\n\n    function PhysicalPin(pin) {\n        var _ret2;\n\n        _classCallCheck(this, PhysicalPin);\n\n        if (WIRING_PI === undefined) {\n            wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.setup('gpio');\n            WIRING_PI = true;\n        }\n\n        if (PI_INFO === undefined) {\n            PI_INFO = wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.piBoardRev();\n        }\n\n        if (pin < 0 || pin > 54) {\n            throw new Error('Invalid pin ' + pin + ' specified (must be 0..53)');\n        }\n\n        if (_PINS[pin] !== undefined) {\n            var _ret;\n\n            return _ret = _PINS[pin], _possibleConstructorReturn(_this, _ret);\n        }\n\n        var _this = _possibleConstructorReturn(this, _Pin.call(this));\n\n        _this._number = pin;\n        _this._pwm = undefined;\n        _this._frequency = undefined;\n        _this._dutyCycle = undefined;\n        _this._bounce = -666;\n        _this._whenChanged = undefined;\n        _this._function = 'input';\n        _this._state = false;\n        _this._pull = 'floating';\n        _this._bounce = undefined;\n        _this._edges = 'both';\n\n        wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.pinMode(pin, wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.INPUT);\n\n        _PINS[pin] = _this;\n\n        return _ret2 = _this, _possibleConstructorReturn(_this, _ret2);\n    }\n\n    PhysicalPin.prototype.number = function number() {\n        return this._number;\n    };\n\n    PhysicalPin.prototype.close = function close() {\n        this._frequency = undefined;\n        this._whenChanged = undefined;\n\n        wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.pullUpDnControl(this._number, wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.PUD_OFF);\n    };\n\n    PhysicalPin.prototype.outputWithState = function outputWithState(state) {\n        this._pull = 'floating';\n        this.pinFunction('output');\n\n        wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.digitalWrite(this._number, state);\n    };\n\n    PhysicalPin.prototype.pinFunction = function pinFunction(value) {\n        if (value === undefined) {\n            return this._function;\n        }\n\n        if (value !== 'input') {\n            this._pull = 'floating';\n        }\n\n        if (value === 'input' || value === 'output') {\n            wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.pinMode(this._number, GPIO_FUNCTIONS[value]);\n            wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.pullUpDnControl(this._number, GPIO_PULL_UPS[this._pull]);\n\n            this._function = value;\n        } else {\n            throw new Error('invalid function ' + value + ' for pin ' + this._number);\n        }\n        return value;\n    };\n\n    PhysicalPin.prototype.state = function state(value) {\n        if (value === undefined) {\n            if (this._pwm !== undefined) {\n                return this._dutyCycle;\n            }\n            return wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.digitalRead(this._number);\n        }\n        if (this._pwm !== undefined) {\n            wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.pwmWrite(this._number, value);\n\n            this._dutyCycle = value;\n        } else {\n            wiringpi_node__WEBPACK_IMPORTED_MODULE_0___default.a.digitalWrite(this._number, value ? 1 : 0);\n        }\n        return value;\n    };\n\n    PhysicalPin.prototype.toString = function toString() {\n        return 'GPIO ' + this._number.toString();\n    };\n\n    return PhysicalPin;\n}(_pin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhysicalPin);\n\n//# sourceURL=webpack://pi-home-gpio/./src/physicalPin.js?");

/***/ }),

/***/ "./src/pin.js":
/*!********************!*\
  !*** ./src/pin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar noop = function noop() {\n    return {};\n};\n\nvar Pin = function () {\n    function Pin() {\n        _classCallCheck(this, Pin);\n\n        this._blinkTimer = undefined;\n    }\n\n    Pin.prototype.close = function close() {\n        this.stopBlink();\n    };\n\n    Pin.prototype.outputWithState = function outputWithState(state) {\n        this._function = 'output';\n        this.state(state);\n    };\n\n    Pin.prototype.pinFunction = function pinFunction(value) {\n        if (value === undefined) {\n            return 'input';\n        }\n        if (value !== 'input') {\n            throw new Error('Cannot set the function of pin ' + this + ' to ' + value);\n        }\n        return value;\n    };\n\n    Pin.prototype.state = function state(value) {\n        if (!value) {\n            return 0;\n        }\n        throw new Error('Cannot set the state of input pin ' + this);\n    };\n\n    Pin.prototype.blink = function blink() {\n        var onTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n        var offTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n        var _this = this;\n\n        var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n        var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;\n\n        var onTimeMilliSeconds = onTime * 1000;\n        var offTimeMilliSeconds = offTime * 1000;\n        var numberOfBlinks = times;\n\n        this.stopBlink();\n\n        this._blinkTimer = setInterval(function () {\n            if (numberOfBlinks > 0) {\n                _this.state(true);\n\n                setTimeout(function () {\n                    _this.state(false);\n                    numberOfBlinks--;\n                }, onTimeMilliSeconds);\n            } else {\n                _this.stopBlink();\n\n                if (callback !== undefined) {\n                    callback();\n                }\n            }\n        }, onTimeMilliSeconds + offTimeMilliSeconds);\n\n        this.state(true);\n\n        setTimeout(function () {\n            _this.state(false);\n            numberOfBlinks--;\n        }, onTimeMilliSeconds);\n    };\n\n    Pin.prototype.stopBlink = function stopBlink() {\n        if (this._blinkTimer) {\n            clearInterval(this._blinkTimer);\n            this._blinkTimer = undefined;\n        }\n    };\n\n    Pin.prototype.toString = function toString() {\n        return 'Abstract pin';\n    };\n\n    return Pin;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pin);\n\n//# sourceURL=webpack://pi-home-gpio/./src/pin.js?");

/***/ }),

/***/ "wiringpi-node":
/*!********************************!*\
  !*** external "wiringpi-node" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_wiringpi_node__;\n\n//# sourceURL=webpack://pi-home-gpio/external_%22wiringpi-node%22?");

/***/ })

/******/ });
});