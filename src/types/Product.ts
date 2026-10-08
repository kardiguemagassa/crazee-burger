export type MenuProduct = {
  id: string
  imageSource: string
  title: string
  price: number
  quantity?: number //@TODO: à voir si quantity doit eêtre retiré ou non
  isAvailable: boolean
  isPublicised: boolean
}

export type BasketProductQuantity = {
  id: string
  quantity: number
}

export type BasketProduct = MenuProduct & BasketProductQuantity
