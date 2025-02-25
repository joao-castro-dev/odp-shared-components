import { SearchProducts as FSSearchProducts, useSearch } from "@faststore/ui";

// REVIEW LATER
// import type { ProductSummary_ProductFragment } from "@faststore/core/api";

import SearchProductItem from "../SearchProductItem";
import { SearchProductsProps } from "./SearchProductsTypes";

function SearchProducts({
  currency,
  locale,
  handleProductLink,
  ...otherProps
}: SearchProductsProps) {
  const search = useSearch();
  return (
    <FSSearchProducts title="Suggested Products:">
      {search?.values?.products?.map((product: unknown, index: number) => {
        // REVIEW LATER
        const productParsed = product as any;
        return (
          <SearchProductItem
            key={productParsed.id}
            product={productParsed}
            index={index}
            currency={currency}
            locale={locale}
            handleProductLink={handleProductLink}
          />
        );
      })}
    </FSSearchProducts>
  );
}

export { SearchProducts };
