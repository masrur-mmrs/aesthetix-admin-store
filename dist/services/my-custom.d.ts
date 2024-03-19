import { TransactionBaseService, User } from "@medusajs/medusa";
import { IEventBusService } from "@medusajs/types";
export default class MyCustomService extends TransactionBaseService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly eventBusService_: IEventBusService;
    protected readonly loggedInUser_: User | null;
    constructor({ eventBusService }: {
        eventBusService: IEventBusService;
    }, container: {
        loggedInUser: User;
    }, options: Record<string, unknown>);
}
