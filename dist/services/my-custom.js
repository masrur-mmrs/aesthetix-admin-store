"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _awilix = require("awilix");
var _medusa = require("@medusajs/medusa");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MyCustomService = exports["default"] = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(MyCustomService, _TransactionBaseServi);
  var _super = _createSuper(MyCustomService);
  function MyCustomService(_ref, container, options) {
    var _this;
    var eventBusService = _ref.eventBusService;
    (0, _classCallCheck2["default"])(this, MyCustomService);
    // @ts-ignore
    _this = _super.apply(this, arguments);
    try {
      _this.eventBusService_ = eventBusService;
      _this.loggedInUser_ = container.loggedInUser;
    } catch (e) {
      console.log(e);
    }
    return _this;
  }
  return (0, _createClass2["default"])(MyCustomService);
}(_medusa.TransactionBaseService);
(0, _defineProperty2["default"])(MyCustomService, "LIFE_TIME", _awilix.Lifetime.SCOPED);