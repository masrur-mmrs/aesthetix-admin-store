"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
class PostService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.postRepository_ = container.postRepository;
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const postRepo = this.activeManager_.withRepository(this.postRepository_);
        const query = (0, medusa_1.buildQuery)(selector, config);
        return postRepo.findAndCount(query);
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const [posts] = await this.listAndCount(selector, config);
        return posts;
    }
    async retrieve(id, config) {
        const postRepo = this.activeManager_.withRepository(this.postRepository_);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const post = await postRepo.findOne(query);
        if (!post) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Post was not found");
        }
        return post;
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const postRepo = manager.withRepository(this.postRepository_);
            const post = postRepo.create();
            post.title = data.title;
            post.author_id = data.author_id;
            const result = await postRepo.save(post);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const postRepo = manager.withRepository(this.postRepository_);
            const post = await this.retrieve(id);
            Object.assign(post, data);
            return await postRepo.save(post);
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const postRepo = manager.withRepository(this.postRepository_);
            const post = await this.retrieve(id);
            await postRepo.remove([post]);
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBSzJCO0FBR3pCLDJDQUE2QztBQUU3QyxNQUFNLFdBQVksU0FBUSwrQkFBc0I7SUFHOUMsWUFBWSxTQUFTO1FBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUE7SUFDakQsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQ2hCLFFBQXlCLEVBQ3pCLFNBQTJCO1FBQ3pCLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtLQUNoQjtRQUNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUNqRCxJQUFJLENBQUMsZUFBZSxDQUNyQixDQUFBO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUUxQyxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBeUIsRUFDekIsU0FBMkI7UUFDekIsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO1FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFekQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FDWixFQUFVLEVBQ1YsTUFBeUI7UUFFekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ2pELElBQUksQ0FBQyxlQUFlLENBQ3JCLENBQUE7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFBLG1CQUFVLEVBQUM7WUFDdkIsRUFBRTtTQUNILEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFVixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFMUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLG9CQUFvQixDQUNyQixDQUFBO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLElBQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDekMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDckMsSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQTtZQUNELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4QyxPQUFPLE1BQU0sQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQ1YsRUFBVSxFQUNWLElBQStCO1FBRS9CLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMvQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUNyQyxJQUFJLENBQUMsZUFBZSxDQUNyQixDQUFBO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRXpCLE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVTtRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDckMsSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQTtZQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUVwQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsV0FBVyxDQUFBIn0=