"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
class MyCustomService extends medusa_1.TransactionBaseService {
    constructor({ eventBusService }, container, options) {
        // @ts-ignore
        super(...arguments);
        try {
            this.eventBusService_ = eventBusService;
            this.loggedInUser_ = container.loggedInUser;
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = MyCustomService;
MyCustomService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL215LWN1c3RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFpQztBQUNqQyw2Q0FBZ0U7QUFHaEUsTUFBcUIsZUFBZ0IsU0FBUSwrQkFBc0I7SUFLakUsWUFDSSxFQUFFLGVBQWUsRUFBeUMsRUFDMUQsU0FBa0MsRUFDbEMsT0FBZ0M7UUFFbEMsYUFBYTtRQUNiLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBQ25CLElBQUk7WUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQTtTQUM1QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVoQjtJQUVILENBQUM7O0FBcEJILGtDQXFCQztBQXBCUSx5QkFBUyxHQUFHLGlCQUFRLENBQUMsTUFBTSxDQUFBIn0=