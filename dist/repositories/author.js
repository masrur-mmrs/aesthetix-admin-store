"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRepository = void 0;
const author_1 = require("../models/author");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.AuthorRepository = database_1.dataSource
    .getRepository(author_1.Author)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.AuthorRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcmllcy9hdXRob3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXlDO0FBQ3pDLHFFQUUrQztBQUVsQyxRQUFBLGdCQUFnQixHQUFHLHFCQUFVO0tBQ3ZDLGFBQWEsQ0FBQyxlQUFNLENBQUM7S0FDckIsTUFBTSxDQUFDO0lBQ04sWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHdCQUFnQixDQUFBIn0=