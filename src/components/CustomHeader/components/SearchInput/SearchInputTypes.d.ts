import type { CSSProperties } from "react";
import type { SearchInputFieldProps, SearchInputFieldRef } from "@faststore/ui";
import { Currency } from "../../../../types/formattedPrice";

export interface SearchState {
  sort?: string;
}

export interface FormattedSearchState {
  pathname: string;
  search: string;
}

export interface FormatSearchPathProps {
  term: string;
  sort?: SearchState["sort"];
  handleInitSearchState: (options: {
    term: string;
    sort?: SearchState["sort"];
    base: string;
  }) => SearchState;
  handleFormatSearchState: (searchState: SearchState) => FormattedSearchState;
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
  handleInitSearchState: (options: {
    term: string;
    sort?: SearchState["sort"];
    base: string;
  }) => SearchState;
  handleFormatSearchState: (searchState: SearchState) => FormattedSearchState;
  handleSendAnalytics: <
    U extends { name: string; params: Record<string, any> }
  >(
    event: U
  ) => void;
  handleFormatSearchPath: (data: { term: { value: string }; sort: any }) => any;
  // REVIEW LATER
  topSearchData: any;
  handleAddToSearchHistory: (data: { term: string; path: string }) => void;
  // REVIEW LATER
  handleGetSuggestions: (searchQueryDeferred: any) => { data: any; error: any };
  // REVIEW LATER
  searchHistoryData: any;
  // REVIEW LATER
  handleClearSearchHistory: any;
  otherProps?: Record<string, string | number | Object>;
}

export interface SearchInputRef extends SearchInputFieldRef {
  resetSearchInput: () => void;
  setSearchDropdownVisible: (isVisible: boolean) => void;
}
