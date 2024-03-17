import { 
    ProductService, 
    ConfigModule,
    MedusaContainer,
  } from "@medusajs/medusa"
  
  export default async (
    container: MedusaContainer,
    config: ConfigModule
  ): Promise<void> => {
    console.info("Starting loader...")
    const productService = container.resolve<ProductService>(
      "productService"
    )
    console.info(`Products count: ${
      await productService.count()
    }`)
    console.info("Ending loader...")
  }