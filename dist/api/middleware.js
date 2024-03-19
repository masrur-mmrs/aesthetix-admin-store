"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const registerLoggedInUser = async (req, res, next) => {
    let loggedInUser = null;
    if (req.user && req.user.userId) {
        const userService = req.scope.resolve("userService");
        loggedInUser = await userService.retrieve(req.user.userId);
    }
    req.scope.register({
        loggedInUser: {
            resolve: () => loggedInUser,
        },
    });
    next();
};
const storeMiddleware = (req, res, next) => {
    // do something
    req.scope.register({
        storeMiddleware: {
            resolve: () => res.send("Store Middleware")
        },
    });
    next();
};
const customResource = (req, res, next) => {
    req.scope.register({
        customResource: {
            resolve: () => res.send("Custom Resource"),
        },
    });
    next();
};
exports.config = {
    routes: [
        {
            matcher: "/admin/products",
            middlewares: [registerLoggedInUser],
        },
        {
            matcher: "/app",
            middlewares: [registerLoggedInUser],
        },
        {
            matcher: "/store/*",
            middlewares: [storeMiddleware, customResource],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFXQSxNQUFNLG9CQUFvQixHQUFHLEtBQUssRUFDaEMsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsSUFBd0IsRUFDeEIsRUFBRTtJQUNGLElBQUksWUFBWSxHQUFnQixJQUFJLENBQUE7SUFFcEMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQy9CLE1BQU0sV0FBVyxHQUNmLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBZ0IsQ0FBQTtRQUNqRCxZQUFZLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDM0Q7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNqQixZQUFZLEVBQUU7WUFDWixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWTtTQUMzQjtLQUNGLENBQUMsQ0FBQTtJQUVILElBQUksRUFBRSxDQUFBO0FBQ1IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUcsQ0FDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsSUFBd0IsRUFDeEIsRUFBRTtJQUNGLGVBQWU7SUFFZixHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNqQixlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUM1QztLQUNGLENBQUMsQ0FBQTtJQUdGLElBQUksRUFBRSxDQUFBO0FBRVIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FDckIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsSUFBd0IsRUFBRSxFQUFFO0lBRTVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2pCLGNBQWMsRUFBRTtZQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQzNDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxFQUFFLENBQUE7QUFDTixDQUFDLENBQUE7QUFFVSxRQUFBLE1BQU0sR0FBc0I7SUFDdkMsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsVUFBVTtZQUNuQixXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO1NBQy9DO0tBQ0Y7Q0FDRixDQUFBIn0=