"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const storeMiddleware = (req, res, next) => {
    // do something
    next();
};
const customResource = (req, res, next) => {
    req.scope.register({
        customResource: {
            resolve: () => "my custom resource",
        },
    });
    next();
};
exports.config = {
    routes: [
        {
            matcher: "/store/*",
            middlewares: [storeMiddleware],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSxNQUFNLGVBQWUsR0FBRyxDQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixJQUF3QixFQUN4QixFQUFFO0lBQ0YsZUFBZTtJQUNmLElBQUksRUFBRSxDQUFBO0FBQ1IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FDbkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsSUFBd0IsRUFBRSxFQUFFO0lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2pCLGNBQWMsRUFBRTtZQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxvQkFBb0I7U0FDcEM7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQUdVLFFBQUEsTUFBTSxHQUFzQjtJQUN2QyxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMvQjtLQUNGO0NBQ0YsQ0FBQSJ9