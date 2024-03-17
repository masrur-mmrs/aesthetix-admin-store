"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (container, config) => {
    console.info("Starting loader...");
    const productService = container.resolve("productService");
    console.info(`Products count: ${await productService.count()}`);
    console.info("Ending loader...");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvYWRlcnMvbXktbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUUsa0JBQWUsS0FBSyxFQUNsQixTQUEwQixFQUMxQixNQUFvQixFQUNMLEVBQUU7SUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQ3RDLGdCQUFnQixDQUNqQixDQUFBO0lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFDWCxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQzVCLEVBQUUsQ0FBQyxDQUFBO0lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2xDLENBQUMsQ0FBQSJ9