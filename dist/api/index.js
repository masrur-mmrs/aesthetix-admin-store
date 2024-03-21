"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _medusa = require("@medusajs/medusa");
var _createProduct = require("@medusajs/medusa/dist/api/routes/admin/products/create-product");
var _classValidator = require("class-validator");
var _dec, _dec2, _class, _descriptor;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AdminPostProductsReq = (_dec = (0, _classValidator.IsString)(), _dec2 = Reflect.metadata("design:type", String), (_class = /*#__PURE__*/function (_MedusaAdminPostProdu) {
  (0, _inherits2["default"])(AdminPostProductsReq, _MedusaAdminPostProdu);
  var _super = _createSuper(AdminPostProductsReq);
  function AdminPostProductsReq() {
    var _this;
    (0, _classCallCheck2["default"])(this, AdminPostProductsReq);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "custom_field", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  return (0, _createClass2["default"])(AdminPostProductsReq);
}(_createProduct.AdminPostProductsReq), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "custom_field", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
(0, _medusa.registerOverriddenValidators)(AdminPostProductsReq);