"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
async function logger(req, res, next) {
    console.log("Request received");
    next();
}
exports.config = {
    routes: [
        {
            matcher: "/store/custom",
            middlewares: [logger],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSxLQUFLLFVBQVUsTUFBTSxDQUNuQixHQUFrQixFQUNsQixHQUFtQixFQUNuQixJQUF3QjtJQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXNCO0lBQ3ZDLE1BQU0sRUFBRTtRQUNOO1lBQ0UsT0FBTyxFQUFFLGVBQWU7WUFDeEIsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ3RCO0tBQ0Y7Q0FDRixDQUFDIn0=