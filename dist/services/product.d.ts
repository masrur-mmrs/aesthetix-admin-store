import { ProductService as MedusaProductService } from "@medusajs/medusa";
declare class ProductService extends MedusaProductService {
    static LIFE_TIME: import("awilix").LifetimeType;
}
export default ProductService;
