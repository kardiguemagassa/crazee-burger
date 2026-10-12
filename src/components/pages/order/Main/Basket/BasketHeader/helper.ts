import { DEFAULT_SUM_TO_PAY } from "@/constants/product"
import { BasketProductQuantity } from "@/types/Basket"
import { Menu } from "@/types/Menu"
import { Product } from "@/types/Product"
import { convertStringToBoolean } from "@/utils/string"
import { getBasketItem } from "../BasketBody/helper"

export const calculateSumToPay = (
  basket: BasketProductQuantity[],
  products: Product[] | undefined,
  menus: Menu[] | undefined
) => {
  if (products === undefined || menus === undefined) return DEFAULT_SUM_TO_PAY

  return basket.reduce((total, basketProductQuantity) => {
    let itemFound = getBasketItem(basketProductQuantity.id, products, menus)

    // pas de produit trouvé (typescript)
    if (itemFound === undefined) return total

    // on ne veut pas afficher de NaN
    if (isNaN(itemFound.price)) return total

    // si le produit est en rupture de stock, alors on le retire du calcul du total à payer
    if (convertStringToBoolean(itemFound.isAvailable) === false) return total

    const subTotal = itemFound.price * basketProductQuantity.quantity

    total += subTotal
    return total
  }, DEFAULT_SUM_TO_PAY)
}
