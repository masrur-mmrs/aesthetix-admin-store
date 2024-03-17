"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
class MyCustomService extends medusa_1.TransactionBaseService {
    constructor({ eventBusService }, options) {
        // @ts-ignore
        super(...arguments);
        this.eventBusService_ = eventBusService;
    }
}
exports.default = MyCustomService;
MyCustomService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL215LWN1c3RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFpQztBQUNqQyw2Q0FBMEQ7QUFHMUQsTUFBcUIsZUFBZ0IsU0FBUSwrQkFBc0I7SUFJakUsWUFDSSxFQUFFLGVBQWUsRUFBeUMsRUFDMUQsT0FBZ0M7UUFFbEMsYUFBYTtRQUNiLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUE7SUFDekMsQ0FBQzs7QUFaSCxrQ0FhQztBQVpRLHlCQUFTLEdBQUcsaUJBQVEsQ0FBQyxNQUFNLENBQUEifQ==