import { 
    ProductService, 
    ConfigModule,
    MedusaContainer,
    Logger,
  } from "@medusajs/medusa"
  
  export default async (
    container: MedusaContainer,
    config: ConfigModule
  ): Promise<void> => {
    const logger = container.resolve<Logger>("logger")

    const activityId = logger.activity("Starting loader...")
    console.info("Starting loader...")

    const productService = container.resolve<ProductService>(
      "productService"
    )

    try {
      logger.progress(activityId, `Products count: ${
        console.info(`Products count: ${
          await productService.count()
        }`)
      }`)
    } catch (e) {
      logger.failure(activityId, `An error occurred: ${e}`)
    }
  
    
    logger.success(activityId, "Ending loader")
    console.info("Ending loader...")
  }