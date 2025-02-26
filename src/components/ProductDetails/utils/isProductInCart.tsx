import { CartItem } from "../ProductDetailsTypes";

export function isProductInCart(items: CartItem[], sku: string): boolean {
  return items.some((item) => item.itemOffered.sku === sku);
}
