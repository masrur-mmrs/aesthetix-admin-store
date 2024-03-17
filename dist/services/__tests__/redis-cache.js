"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const redisClientMock = {
    set: jest.fn(),
    get: jest.fn(),
};
describe("RedisCacheService", () => {
    let cacheService;
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("Underlying client methods are called", async () => {
        cacheService = new index_1.RedisCacheService({
            cacheRedisConnection: redisClientMock,
        }, {});
        await cacheService.set("test-key", "value");
        expect(redisClientMock.set).toBeCalled();
        await cacheService.get("test-key");
        expect(redisClientMock.get).toBeCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMtY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvX190ZXN0c19fL3JlZGlzLWNhY2hlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTRDO0FBRTVDLE1BQU0sZUFBZSxHQUFHO0lBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDakIsQ0FBQTtBQUVELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxZQUFZLENBQUE7SUFFaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUcsRUFBRTtRQUNqRCxZQUFZLEdBQUcsSUFBSSx5QkFBaUIsQ0FBQztZQUNqQyxvQkFBb0IsRUFBRSxlQUFlO1NBQ3hDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFTixNQUFNLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFFeEMsTUFBTSxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDNUMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9