"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AuthorRepository = void 0;
var _author = require("../models/author");
var _database = require("@medusajs/medusa/dist/loaders/database");
var AuthorRepository = exports.AuthorRepository = _database.dataSource.getRepository(_author.Author).extend({
  customMethod: function customMethod() {
    // TODO add custom implementation
    return;
  }
});
var _default = exports["default"] = AuthorRepository;