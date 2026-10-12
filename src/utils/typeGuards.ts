import { Product } from "@/types/Product"
import { Menu } from "@/types/Menu"

export const isProductType = (item: any): item is Product => {
  return item && typeof item === "object" && !("products" in item)
}

export const isMenuType = (item: any): item is Menu => {
  return item && typeof item === "object" && "products" in item && Array.isArray(item.products)
}
