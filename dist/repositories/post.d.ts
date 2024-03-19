import { Post } from "../models/post";
export declare const PostRepository: import("typeorm").Repository<Post> & {
    customMethod(): void;
};
export default PostRepository;
