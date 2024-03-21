"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1() {
    const imports = (await Promise.resolve().then(() => __importStar(require("@medusajs/medusa/dist/api/routes/store/products/index"))));
    imports.allowedStoreProductsFields = [
        ...imports.allowedStoreProductsFields,
        "customAttribute",
    ];
    imports.defaultStoreProductsFields = [
        ...imports.defaultStoreProductsFields,
        "customAttribute",
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kLXByb2R1Y3QtZmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvYWRlcnMvZXh0ZW5kLXByb2R1Y3QtZmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxLQUFLO0lBQ2hCLE1BQU0sT0FBTyxHQUFHLENBQUMsd0RBQ2YsdURBQXVELEdBQ3hELENBQVEsQ0FBQTtJQUNULE9BQU8sQ0FBQywwQkFBMEIsR0FBRztRQUNuQyxHQUFHLE9BQU8sQ0FBQywwQkFBMEI7UUFDckMsaUJBQWlCO0tBQ2xCLENBQUE7SUFDRCxPQUFPLENBQUMsMEJBQTBCLEdBQUc7UUFDbkMsR0FBRyxPQUFPLENBQUMsMEJBQTBCO1FBQ3JDLGlCQUFpQjtLQUNsQixDQUFBO0FBQ0gsQ0FBQztBQVpILDRCQVlHIn0=