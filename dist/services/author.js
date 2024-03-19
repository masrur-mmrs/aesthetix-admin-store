"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
class AuthorService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.authorRepository_ = container.authorRepository;
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const authorRepo = this.activeManager_.withRepository(this.authorRepository_);
        const query = (0, medusa_1.buildQuery)(selector, config);
        return authorRepo.findAndCount(query);
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const [authors] = await this.listAndCount(selector, config);
        return authors;
    }
    async retrieve(id, config) {
        const authorRepo = this.activeManager_.withRepository(this.authorRepository_);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const author = await authorRepo.findOne(query);
        if (!author) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Author was not found");
        }
        return;
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const authorRepo = manager.withRepository(this.authorRepository_);
            const post = authorRepo.create(data);
            const result = await authorRepo.save(post);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const authorRepo = manager.withRepository(this.authorRepository_);
            const post = await this.retrieve(id);
            Object.assign(post, data);
            return await authorRepo.save(post);
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const authorRepo = manager.withRepository(this.authorRepository_);
            const post = await this.retrieve(id);
            await authorRepo.remove([post]);
        });
    }
}
exports.default = AuthorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2F1dGhvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUsyQjtBQUl6QiwyQ0FBNkM7QUFFN0MsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBS2hELFlBQVksU0FBUztRQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FDaEIsUUFBMkIsRUFDM0IsU0FBNkI7UUFDM0IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO1FBQ0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQTtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUEsbUJBQVUsRUFBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFMUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUNSLFFBQTJCLEVBQzNCLFNBQTZCO1FBQzNCLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtLQUNoQjtRQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRTNELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUNaLEVBQVUsRUFDVixNQUEyQjtRQUUzQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFBO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVSxFQUFDO1lBQ3ZCLEVBQUU7U0FDSCxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRVYsTUFBTSxNQUFNLEdBQUcsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTlDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQixzQkFBc0IsQ0FDdkIsQ0FBQTtTQUNGO1FBRUQsT0FBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLElBQW9DO1FBRXBDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFBO1lBQ0QsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNwQyxNQUFNLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFMUMsT0FBTyxNQUFNLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLEVBQVUsRUFDVixJQUFpQztRQUVqQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFBO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRXpCLE9BQU8sTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVTtRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFBO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRXBDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxhQUFhLENBQUEifQ==