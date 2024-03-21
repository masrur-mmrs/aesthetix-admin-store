"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const post_1 = require("../models/post");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.PostRepository = database_1.dataSource
    .getRepository(post_1.Post)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.PostRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBcUM7QUFDckMscUVBRStDO0FBRWxDLFFBQUEsY0FBYyxHQUFHLHFCQUFVO0tBQ3JDLGFBQWEsQ0FBQyxXQUFJLENBQUM7S0FDbkIsTUFBTSxDQUFDO0lBQ04sWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHNCQUFjLENBQUEifQ==