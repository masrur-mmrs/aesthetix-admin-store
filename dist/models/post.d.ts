import { BaseEntity } from "@medusajs/medusa";
import { Author } from "./author";
export declare class Post extends BaseEntity {
    title: string | null;
    author_id: string;
    author: Author;
    private beforeInsert;
}
