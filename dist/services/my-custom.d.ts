import { TransactionBaseService } from "@medusajs/medusa";
import { IEventBusService } from "@medusajs/types";
export default class MyCustomService extends TransactionBaseService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly eventBusService_: IEventBusService;
    constructor({ eventBusService }: {
        eventBusService: IEventBusService;
    }, options: Record<string, unknown>);
}
