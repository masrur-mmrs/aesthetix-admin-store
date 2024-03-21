"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _default = exports["default"] = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(container, config) {
    var logger, activityId, productService;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          logger = container.resolve("logger");
          activityId = logger.activity("Starting loader...");
          console.info("Starting loader...");
          productService = container.resolve("productService");
          _context.prev = 4;
          _context.t0 = logger;
          _context.t1 = activityId;
          _context.t2 = "Products count: ";
          _context.t3 = console;
          _context.t4 = "Products count: ";
          _context.next = 12;
          return productService.count();
        case 12:
          _context.t5 = _context.sent;
          _context.t6 = _context.t4.concat.call(_context.t4, _context.t5);
          _context.t7 = _context.t3.info.call(_context.t3, _context.t6);
          _context.t8 = _context.t2.concat.call(_context.t2, _context.t7);
          _context.t0.progress.call(_context.t0, _context.t1, _context.t8);
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t9 = _context["catch"](4);
          logger.failure(activityId, "An error occurred: ".concat(_context.t9));
        case 22:
          logger.success(activityId, "Ending loader");
          console.info("Ending loader...");
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 19]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();