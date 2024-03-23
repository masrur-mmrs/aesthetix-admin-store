import { IdempotencyKey, MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import { IdempotencyKeyService } from "@medusajs/medusa"
import { Post } from "../../../models/post"
import { EntityManager } from "typeorm";
import PostRepository from "../../../repositories/post";
import ProductRepository from "../../../repositories/product"


export const POST = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  // ...
  const idempotencyKeyService = req.scope.resolve<
    IdempotencyKeyService
  >("idempotencyKeyService")
  const headerKey = req.get("Idempotency-Key") || ""

  const idempotencyKey = await idempotencyKeyService
    .initializeRequest(
      headerKey,
      req.method,
      req.params,
      req.path
    )
  // ...
}

export const GET = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  const postRepository: typeof PostRepository = 
    req.scope.resolve("postRepository")
    
  const productRepository: typeof ProductRepository = 
    req.scope.resolve(
      "productRepository"
    )
    
  const manager: EntityManager = req.scope.resolve("manager")
  const postRepo = manager.getRepository(Post)

  const productRepo = manager.withRepository(
    productRepository
  )
  productRepo.customFunction()

  return res.json({
    posts: await postRepo.find(),
  })
}
