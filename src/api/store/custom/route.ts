import { IdempotencyKey, MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import { IdempotencyKeyService } from "@medusajs/medusa"
import { Post } from "../../../models/post"
import { EntityManager } from "typeorm";
import PostRepository from "../../../repositories/post";



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
    

    
  const manager: EntityManager = req.scope.resolve("manager")
  const postRepo = manager.getRepository(Post)


  return res.json({
    posts: await postRepo.find(),
  })
}

