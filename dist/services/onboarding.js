"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
class OnboardingService extends medusa_1.TransactionBaseService {
    constructor({ onboardingRepository }) {
        super(arguments[0]);
        this.onboardingRepository_ = onboardingRepository;
    }
    async retrieve() {
        const onboardingRepo = this.activeManager_.withRepository(this.onboardingRepository_);
        const status = await onboardingRepo.findOne({
            where: { id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()) },
        });
        return status;
    }
    async update(data) {
        return await this.atomicPhase_(async (transactionManager) => {
            const onboardingRepository = transactionManager.withRepository(this.onboardingRepository_);
            const status = await this.retrieve();
            for (const [key, value] of Object.entries(data)) {
                status[key] = value;
            }
            return await onboardingRepository.save(status);
        });
    }
}
exports.default = OnboardingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9vbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXlEO0FBR3pELHFDQUFvRDtBQVFwRCxNQUFNLGlCQUFrQixTQUFRLCtCQUFzQjtJQUdwRCxZQUFZLEVBQUUsb0JBQW9CLEVBQXdCO1FBQ3hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVuQixJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQW9CLENBQUE7SUFDbkQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO1FBQ1osTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ3ZELElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBQSxhQUFHLEVBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsRUFBRTtTQUM3QixDQUFDLENBQUE7UUFFRixPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLElBQWdDO1FBRWhDLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUM1QixLQUFLLEVBQUUsa0JBQWlDLEVBQUUsRUFBRTtZQUMxQyxNQUFNLG9CQUFvQixHQUN4QixrQkFBa0IsQ0FBQyxjQUFjLENBQy9CLElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQTtZQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBRXBDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO2FBQ3BCO1lBRUQsT0FBTyxNQUFNLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=