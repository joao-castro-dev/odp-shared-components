import { ProductSummary_ProductFragment } from "@faststore/core/api";
import { Currency } from "../../../../../../types/formattedPrice";

export interface SearchProductItemProps {
  product: ProductSummary_ProductFragment;
  currency: Currency;
  locale: string;
  handleProductLink: (
    product: any,
    selectedOffer: number,
    index: number
  ) => { href; onClick; baseLinkProps };
  index: number;
}
