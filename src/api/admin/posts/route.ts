import type {
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/medusa"
  import PostService  from "../../../services/post"
  
  // list posts
  export const GET = async (
    req: MedusaRequest, 
    res: MedusaResponse
  ) => {
    const postService: PostService = req.scope.resolve(
      "postService"
    )
  
    res.json({
      posts: await postService.list(),
    })
  }
  
  // create a post
  export const POST = async (
    req: MedusaRequest, 
    res: MedusaResponse
  ) => {
    const postService: PostService = req.scope.resolve(
      "postService"
    )
  
    // basic validation of request body
    if (!req.body.title || !req.body.author_id) {
      throw new Error("`title` and `author_id` are required.")
    }
  
    const post = await postService.create(req.body)
  
    res.json({
      post,
    })
  }