import { FindConfig, Selector, TransactionBaseService } from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import AuthorRepository from "../repositories/author";
import { Author } from "../models/author";
declare class AuthorService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager;
    protected authorRepository_: typeof AuthorRepository;
    constructor(container: any);
    listAndCount(selector?: Selector<Author>, config?: FindConfig<Author>): Promise<[Author[], number]>;
    list(selector?: Selector<Author>, config?: FindConfig<Author>): Promise<Author[]>;
    retrieve(id: string, config?: FindConfig<Author>): Promise<Author>;
    create(data: Pick<Author, "name" | "image">): Promise<Author>;
    update(id: string, data: Omit<Partial<Author>, "id">): Promise<Author>;
    delete(id: string): Promise<void>;
}
export default AuthorService;
