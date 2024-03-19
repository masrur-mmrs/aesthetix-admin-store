"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
class ProductService extends medusa_1.ProductService {
}
// The default life time for a core service is SINGLETON
ProductService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlDO0FBQ2pDLDZDQUV5QjtBQUV6QixNQUFNLGNBQWUsU0FBUSx1QkFBb0I7O0FBQy9DLHdEQUF3RDtBQUNqRCx3QkFBUyxHQUFHLGlCQUFRLENBQUMsTUFBTSxDQUFBO0FBS3BDLGtCQUFlLGNBQWMsQ0FBQSJ9