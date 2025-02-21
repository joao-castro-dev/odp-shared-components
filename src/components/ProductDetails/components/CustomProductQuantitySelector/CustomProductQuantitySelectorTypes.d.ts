export interface CustomProductQuantitySelectorProps {
  buyButtonTitle: string;
  isValidating: boolean;
  setQuantity: Dispatch<SetStateAction<number>>;
  useUnitMultiplier?: boolean;
  isInCart: boolean;
  unitMultiplier: number | null;
  buyProps: Object;
  sku: string;
  quantity: number;
  // REVIEW LATER
  onInvalidQuantity: any;
}
