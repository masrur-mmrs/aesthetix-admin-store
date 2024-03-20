"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const post_1 = require("../../../models/post");
const POST = async (req, res) => {
    // ...
    const idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
    const headerKey = req.get("Idempotency-Key") || "";
    const idempotencyKey = await idempotencyKeyService
        .initializeRequest(headerKey, req.method, req.params, req.path);
    // ...
};
exports.POST = POST;
const GET = async (req, res) => {
    const postRepository = req.scope.resolve("postRepository");
    const manager = req.scope.resolve("manager");
    const postRepo = manager.getRepository(post_1.Post);
    return res.json({
        posts: await postRepo.find(),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQ0FBMkM7QUFNcEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTTtJQUNOLE1BQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBRTdDLHVCQUF1QixDQUFDLENBQUE7SUFDMUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUVsRCxNQUFNLGNBQWMsR0FBRyxNQUFNLHFCQUFxQjtTQUMvQyxpQkFBaUIsQ0FDaEIsU0FBUyxFQUNULEdBQUcsQ0FBQyxNQUFNLEVBQ1YsR0FBRyxDQUFDLE1BQU0sRUFDVixHQUFHLENBQUMsSUFBSSxDQUNULENBQUE7SUFDSCxNQUFNO0FBQ1IsQ0FBQyxDQUFBO0FBbEJZLFFBQUEsSUFBSSxRQWtCaEI7QUFFTSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLGNBQWMsR0FDbEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUlyQyxNQUFNLE9BQU8sR0FBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQTtJQUc1QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO0tBQzdCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQWhCWSxRQUFBLEdBQUcsT0FnQmYifQ==