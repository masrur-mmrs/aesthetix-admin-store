import type { 
  MiddlewaresConfig, 
  User, 
  UserService,
} from "@medusajs/medusa"
import type { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"

const registerLoggedInUser = async (
  req: MedusaRequest, 
  res: MedusaResponse, 
  next: MedusaNextFunction
) => {
  let loggedInUser: User | null = null

  if (req.user && req.user.userId) {
    const userService = 
      req.scope.resolve("userService") as UserService
    loggedInUser = await userService.retrieve(req.user.userId)
  }


  req.scope.register({
    loggedInUser: {
      resolve: () => loggedInUser,
     },
   })
  
  next()
}

const storeMiddleware = (
  req: MedusaRequest, 
  res: MedusaResponse, 
  next: MedusaNextFunction
) => {
  // do something

  req.scope.register({
    storeMiddleware: {
      resolve: () => res.send("Store Middleware")
    },
  })


  next()

}

const customResource = (
  req: MedusaRequest, 
  res: MedusaResponse,
  next: MedusaNextFunction) => {

  req.scope.register({
    customResource: {
      resolve: () => res.send("Custom Resource"),
    },
  })

  next()
  }

export const config: MiddlewaresConfig = {
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
}