import { Product } from "@medusajs/medusa";
export declare const ProductRepository: import("typeorm").Repository<Product> & {
    /**
     * Here you can create your custom function
     * For example
     */
    customFunction(): void;
    target: import("typeorm").EntityTarget<Product> & typeof Product;
    manager: import("typeorm").EntityManager;
    queryRunner?: import("typeorm").QueryRunner;
    queryProducts(optionsWithoutRelations: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, shouldCount?: boolean): Promise<[Product[], number]>;
    queryProductsWithIds({ entityIds, groupedRelations, withDeleted, select, order, where, }: {
        entityIds: string[];
        groupedRelations: {
            [toplevel: string]: string[];
        };
        withDeleted?: boolean;
        select?: (keyof Product)[];
        order?: {
            [column: string]: "ASC" | "DESC";
        };
        where?: import("typeorm").FindOptionsWhere<Product>;
    }): Promise<Product[]>;
    findWithRelationsAndCount(relations?: string[], idsOrOptionsWithoutRelations?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions): Promise<[Product[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: string[] | import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, withDeleted?: boolean): Promise<Product[]>;
    findOneWithRelations(relations?: string[], optionsWithoutRelations?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions): Promise<Product>;
    bulkAddToCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    bulkRemoveFromCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    getFreeTextSearchResultsAndCount(q: string, options?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, relations?: string[]): Promise<[Product[], number]>;
    getCategoryIdsFromInput(categoryId?: {
        value: string[];
    }, includeCategoryChildren?: boolean): Promise<string[]>;
    getCategoryIdsRecursively(productCategory: import("@medusajs/medusa").ProductCategory): string[];
    _findWithRelations({ relations, idsOrOptionsWithoutRelations, withDeleted, shouldCount, }: {
        relations: string[];
        idsOrOptionsWithoutRelations: string[] | import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions;
        withDeleted: boolean;
        shouldCount: boolean;
    }): Promise<[Product[], number]>;
    isProductInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    _applyCategoriesQuery(qb: import("typeorm").SelectQueryBuilder<Product>, { alias, categoryAlias, where, joinName }: {
        alias: any;
        categoryAlias: any;
        where: any;
        joinName: any;
    }): import("typeorm").SelectQueryBuilder<Product>;
};
export default ProductRepository;
