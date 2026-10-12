import { Product } from "./Product"

export type BasketProductQuantity = {
  id: string
  quantity: number
}

export type BasketProduct = Product & BasketProductQuantity
