"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PostRepository = void 0;
var _post = require("../models/post");
var _database = require("@medusajs/medusa/dist/loaders/database");
var PostRepository = exports.PostRepository = _database.dataSource.getRepository(_post.Post).extend({
  customMethod: function customMethod() {
    // TODO add custom implementation
    return;
  }
});
var _default = exports["default"] = PostRepository;