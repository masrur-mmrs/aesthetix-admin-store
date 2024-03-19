"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const medusa_1 = require("@medusajs/medusa");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const product_1 = require("@medusajs/medusa/dist/repositories/product");
exports.ProductRepository = database_1.dataSource
    .getRepository(medusa_1.Product)
    .extend({
    // it is important to spread the existing repository here.
    //  Otherwise you will end up losing core properties
    ...Object.assign(product_1.ProductRepository, {
        target: medusa_1.Product,
    }),
    /**
     * Here you can create your custom function
     * For example
     */
    customFunction() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.ProductRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFDMUMscUVBRStDO0FBQy9DLHdFQUdtRDtBQUV0QyxRQUFBLGlCQUFpQixHQUFHLHFCQUFVO0tBQ3hDLGFBQWEsQ0FBQyxnQkFBTyxDQUFDO0tBQ3RCLE1BQU0sQ0FBQztJQUNOLDBEQUEwRDtJQUMxRCxvREFBb0Q7SUFDcEQsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUF1QixFQUFFO1FBQ3hDLE1BQU0sRUFBRSxnQkFBTztLQUNoQixDQUFDO0lBRUY7OztPQUdHO0lBQ0gsY0FBYztRQUNaLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHlCQUFpQixDQUFBIn0=