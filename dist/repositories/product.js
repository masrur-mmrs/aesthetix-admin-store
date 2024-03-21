"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProductRepository = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _medusa = require("@medusajs/medusa");
var _database = require("@medusajs/medusa/dist/loaders/database");
var _product = require("@medusajs/medusa/dist/repositories/product");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ProductRepository = exports.ProductRepository = _database.dataSource.getRepository(_medusa.Product).extend(_objectSpread(_objectSpread({}, Object.assign(_product.ProductRepository, {
  target: _medusa.Product
})), {}, {
  /**
   * Here you can create your custom function
   * For example
   */
  customFunction: function customFunction() {
    // TODO add custom implementation
    return;
  }
}));
var _default = exports["default"] = ProductRepository;