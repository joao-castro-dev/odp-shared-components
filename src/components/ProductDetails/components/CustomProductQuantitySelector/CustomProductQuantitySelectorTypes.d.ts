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
  onInvalidQuantity: (data: OnInvalidRequestProps) => void;
}

interface OnInvalidRequestProps {
  title: string;
  message: string;
  status: "ERROR" | "WARNING" | "INFO";
  icon: React.ReactNode;
}
