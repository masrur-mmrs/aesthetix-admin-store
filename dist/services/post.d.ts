import { FindConfig, Selector, TransactionBaseService } from "@medusajs/medusa";
import { PostRepository } from "../repositories/post";
import { Post } from "../models/post";
declare class PostService extends TransactionBaseService {
    protected postRepository_: typeof PostRepository;
    constructor(container: any);
    listAndCount(selector?: Selector<Post>, config?: FindConfig<Post>): Promise<[Post[], number]>;
    list(selector?: Selector<Post>, config?: FindConfig<Post>): Promise<Post[]>;
    retrieve(id: string, config?: FindConfig<Post>): Promise<Post>;
    create(data: Pick<Post, "title" | "author_id">): Promise<Post>;
    update(id: string, data: Omit<Partial<Post>, "id">): Promise<Post>;
    delete(id: string): Promise<void>;
}
export default PostService;
