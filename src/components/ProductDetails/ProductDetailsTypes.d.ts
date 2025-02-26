import { Dispatch, SetStateAction } from "react";

interface ItemOffered {
  sku: string;
}

export interface CartItem {
  itemOffered: ItemOffered;
}

export interface ProductDetailsProps {
  availability: string;
  sku: string;
  price: number;
  listPrice: number;
  unitMultiplier: number;
  buyButtonTitle: string;
  isInCartButtonTitle?: string;
  isInCartMessage?: string;
  buyButtonIcon: {
    alt: string;
    icon: string;
  };
  isValidating: boolean;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  notAvailableButtonTitle: string;
  useUnitMultiplier?: boolean;
  taxesConfiguration?: {
    usePriceWithTaxes?: boolean;
    taxesLabel?: string;
  };
  buyProps: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    "data-testid": string;
    "data-sku": string;
    "data-seller": string;
  };
  productPageSpecifications: Array<{
    name: string;
    originalName: string;
    specifications: Array<{
      name: string;
      originalName: string;
      values: Array<{ val: string }>;
    }>;
  }>;
  cart: Cart;
  onInvalidQuantity: (data: OnInvalidRequestProps) => void;
  className?: string;
}

interface OnInvalidRequestProps {
  title: string;
  message: string;
  status: "ERROR" | "WARNING" | "INFO";
  icon: React.ReactNode;
}

// faststore types

export interface Item {
  id: string;
  quantity: number;
}
export interface Cart<I extends Item> {
  id: string;
  items: I[];
}
