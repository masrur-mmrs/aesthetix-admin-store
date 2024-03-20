import { Column, Entity } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  Product as MedusaProduct,
  nullableValue,
} from "@medusajs/medusa"

@Entity()
export class Product extends MedusaProduct {
  @Column({nullable:true})
  customAttribute?: string
}