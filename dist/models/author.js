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
exports.Author = void 0;
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
const post_1 = require("./post");
let Author = class Author extends medusa_1.BaseEntity {
    beforeInsert() {
        this.id = (0, medusa_1.generateEntityId)(this.id, "auth");
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Author.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_1.Post, (post) => post.author),
    __metadata("design:type", Array)
], Author.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Author.prototype, "beforeInsert", null);
Author = __decorate([
    (0, typeorm_1.Entity)()
], Author);
exports.Author = Author;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9hdXRob3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStEO0FBQy9ELHFDQUtnQjtBQUNoQixpQ0FBNkI7QUFHdEIsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFPLFNBQVEsbUJBQVU7SUFXNUIsWUFBWTtRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUEseUJBQWdCLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0NBQ0YsQ0FBQTtBQWJDO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztvQ0FDaEI7QUFFWjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDOUI7QUFFZDtJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxXQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O3FDQUNoQztBQUViO0lBQUMsSUFBQSxzQkFBWSxHQUFFOzs7OzBDQUdkO0FBYlUsTUFBTTtJQURsQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxNQUFNLENBY2xCO0FBZFksd0JBQU0ifQ==