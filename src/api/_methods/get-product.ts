import { 
    MedusaRequest, 
    MedusaResponse, 
    ProductService,
  } from "@medusajs/medusa"
  
  export default async function (
    req: MedusaRequest, 
    res: MedusaResponse
  ) {
    const productService = req.scope.resolve<ProductService>(
      "productService"
    )
  
    const products = await productService.list({})
  
    res.json({
      products,
    })
  }