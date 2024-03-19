import { Lifetime } from "awilix"
import { TransactionBaseService, User } from "@medusajs/medusa";
import { IEventBusService } from "@medusajs/types";

export default class MyCustomService extends TransactionBaseService {
  static LIFE_TIME = Lifetime.SCOPED
  protected readonly eventBusService_: IEventBusService
  protected readonly loggedInUser_: User | null

  constructor(
      { eventBusService }: { eventBusService: IEventBusService },
      container: { loggedInUser: User; },
      options: Record<string, unknown>
  ) {
    // @ts-ignore
    super(...arguments)
    try {
      this.eventBusService_ = eventBusService
      this.loggedInUser_ = container.loggedInUser
    } catch (e) {
      console.log(e);
      
    }
    
  }
}
