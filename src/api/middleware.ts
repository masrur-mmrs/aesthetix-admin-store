import type { MiddlewaresConfig } from "@medusajs/medusa"
import type { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"

const storeMiddleware = (
  req: MedusaRequest, 
  res: MedusaResponse, 
  next: MedusaNextFunction
) => {
  // do something
  next()
}

const customResource = (
    req: MedusaRequest, 
    res: MedusaResponse,
    next: MedusaNextFunction) => {
    req.scope.register({
      customResource: {
        resolve: () => "my custom resource",
      },
    })
  
    next()
  }
  

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [storeMiddleware],
    },
  ],
}