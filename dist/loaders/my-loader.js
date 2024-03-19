"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (container, config) => {
    const logger = container.resolve("logger");
    const activityId = logger.activity("Starting loader...");
    console.info("Starting loader...");
    const productService = container.resolve("productService");
    try {
        logger.progress(activityId, `Products count: ${console.info(`Products count: ${await productService.count()}`)}`);
    }
    catch (e) {
        logger.failure(activityId, `An error occurred: ${e}`);
    }
    logger.success(activityId, "Ending loader");
    console.info("Ending loader...");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvYWRlcnMvbXktbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Usa0JBQWUsS0FBSyxFQUNsQixTQUEwQixFQUMxQixNQUFvQixFQUNMLEVBQUU7SUFDakIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBUyxRQUFRLENBQUMsQ0FBQTtJQUVsRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBRWxDLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQ3RDLGdCQUFnQixDQUNqQixDQUFBO0lBRUQsSUFBSTtRQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLG1CQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUNYLE1BQU0sY0FBYyxDQUFDLEtBQUssRUFDNUIsRUFBRSxDQUNKLEVBQUUsQ0FBQyxDQUFBO0tBQ0o7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFBO0tBQ3REO0lBR0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2xDLENBQUMsQ0FBQSJ9