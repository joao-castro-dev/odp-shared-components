import type { CSSProperties } from "react";
import type { SearchInputFieldProps, SearchInputFieldRef } from "@faststore/ui";
import { Currency } from "../../../../types/formattedPrice";

export interface FormatSearchPath {
  term: string;
  sort?: SearchState["sort"];
}

export interface SearchInputProps
  extends Omit<SearchInputFieldProps, "onSubmit"> {
  onSearchClick?(): void;
  buttonTestId?: string;
  containerStyle?: CSSProperties;
  placeholder?: string;
  className?: string;
  sort?: string;
  currency: Currency;
  locale: string;
  handleProductLink: (
    product: any,
    selectedOffer: number,
    index: number
  ) => { href: any; onClick: any; baseLinkProps: any };
  otherProps?: Record<string, string | number | Object>;
}

export interface SearchInputRef extends SearchInputFieldRef {
  resetSearchInput: () => void;
  setSearchDropdownVisible: (isVisible: boolean) => void;
}
