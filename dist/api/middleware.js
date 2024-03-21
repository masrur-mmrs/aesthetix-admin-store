"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var registerLoggedInUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var loggedInUser, userService;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          loggedInUser = null;
          if (!(req.user && req.user.userId)) {
            _context.next = 6;
            break;
          }
          userService = req.scope.resolve("userService");
          _context.next = 5;
          return userService.retrieve(req.user.userId);
        case 5:
          loggedInUser = _context.sent;
        case 6:
          req.scope.register({
            loggedInUser: {
              resolve: function resolve() {
                return loggedInUser;
              }
            }
          });
          next();
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function registerLoggedInUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var storeMiddleware = function storeMiddleware(req, res, next) {
  // do something

  req.scope.register({
    storeMiddleware: {
      resolve: function resolve() {
        return res.send("Store Middleware");
      }
    }
  });
  next();
};
var customResource = function customResource(req, res, next) {
  req.scope.register({
    customResource: {
      resolve: function resolve() {
        return res.send("Custom Resource");
      }
    }
  });
  next();
};
var config = exports.config = {
  routes: [{
    matcher: "/admin/products",
    middlewares: [registerLoggedInUser]
  }, {
    matcher: "/app",
    middlewares: [registerLoggedInUser]
  }, {
    matcher: "/store/*",
    middlewares: [storeMiddleware, customResource]
  }]
};