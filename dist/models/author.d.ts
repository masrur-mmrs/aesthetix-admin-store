import { BaseEntity } from "@medusajs/medusa";
import { Post } from "./post";
export declare class Author extends BaseEntity {
    name: string;
    image?: string;
    posts: Post[];
    private beforeInsert;
}
