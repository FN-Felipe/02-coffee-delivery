import { ShoppingCartType } from './ShoppingCart'

export type AppContextType = {
  addCart: (product: ShoppingCartType) => void
  remove: (product: ShoppingCartType) => void
  cart: ShoppingCartType[]
}