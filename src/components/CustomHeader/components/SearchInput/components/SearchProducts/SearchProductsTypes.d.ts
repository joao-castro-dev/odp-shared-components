import { Currency } from "../../../../../../types/formattedPrice";

export interface SearchProductsProps {
  currency: Currency;
  locale: string;
  handleProductLink: (
    product: any,
    selectedOffer: number,
    index: number
  ) => { href: any; onClick: any; baseLinkProps: any };
  otherProps?: Record<string, string | number | Object>;
}
