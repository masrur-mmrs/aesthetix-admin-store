import { Author } from "../models/author";
export declare const AuthorRepository: import("typeorm").Repository<Author> & {
    customMethod(): void;
};
export default AuthorRepository;
