"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const create_product_1 = require("@medusajs/medusa/dist/api/routes/admin/products/create-product");
const class_validator_1 = require("class-validator");
class AdminPostProductsReq extends create_product_1.AdminPostProductsReq {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminPostProductsReq.prototype, "custom_field", void 0);
(0, medusa_1.registerOverriddenValidators)(AdminPostProductsReq);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStEO0FBQy9ELG1HQUV1RTtBQUN2RSxxREFBMEM7QUFFMUMsTUFBTSxvQkFBcUIsU0FBUSxxQ0FBMEI7Q0FHNUQ7QUFGRTtJQUFDLElBQUEsMEJBQVEsR0FBRTs7MERBQ1M7QUFHdkIsSUFBQSxxQ0FBNEIsRUFBQyxvQkFBb0IsQ0FBQyxDQUFBIn0=