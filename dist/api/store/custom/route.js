"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _post = require("../../../models/post");
var POST = exports.POST = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var idempotencyKeyService, headerKey, idempotencyKey;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // ...
          idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
          headerKey = req.get("Idempotency-Key") || "";
          _context.next = 4;
          return idempotencyKeyService.initializeRequest(headerKey, req.method, req.params, req.path);
        case 4:
          idempotencyKey = _context.sent;
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function POST(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var postRepository, productRepository, manager, postRepo, productRepo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          postRepository = req.scope.resolve("postRepository");
          productRepository = req.scope.resolve("productRepository");
          manager = req.scope.resolve("manager");
          postRepo = manager.getRepository(_post.Post);
          productRepo = manager.withRepository(productRepository);
          productRepo.customFunction();
          _context2.t0 = res;
          _context2.next = 9;
          return postRepo.find();
        case 9:
          _context2.t1 = _context2.sent;
          _context2.t2 = {
            posts: _context2.t1
          };
          return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t2));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GET(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();