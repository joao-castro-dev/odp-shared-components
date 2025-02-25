import { SearchDropdown as UISearchDropdown, useSearch } from "@faststore/ui";

import SearchHistory from "../SearchHistory";
import SearchTop from "../SearchTop";
import SearchAutoComplete from "../SearchAutoComplete";
import { ProductSearchProps, SearchDropdownProps } from "./SearchDropdownTypes";
import SearchProducts from "../SearchProducts";

function SearchDropdown({
  sort,
  currency,
  locale,
  handleProductLink,
  ...otherProps
}: SearchDropdownProps) {
  const search = useSearch();

  const products: ProductSearchProps[] = (search?.values?.products ||
    []) as ProductSearchProps[];

  return (
    <UISearchDropdown {...otherProps}>
      <SearchHistory sort={sort} />
      {/* Current Site doesn't have top searches, should we? */}
      <SearchTop sort={sort} />
      {products.length > 0 && (
        <div>
          {/* Current Site doesn't have Suggested Products, should we? */}
          <SearchAutoComplete sort={sort} />
          <SearchProducts
            currency={currency}
            locale={locale}
            handleProductLink={handleProductLink}
          />
        </div>
      )}
    </UISearchDropdown>
  );
}

export { SearchDropdown };
