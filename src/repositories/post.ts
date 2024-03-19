import { Post } from "../models/post"
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

export const PostRepository = dataSource
  .getRepository(Post)
  .extend({
    customMethod(): void {
      // TODO add custom implementation
      return
    },
  })

export default PostRepository