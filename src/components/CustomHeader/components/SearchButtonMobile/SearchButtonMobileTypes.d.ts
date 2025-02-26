export interface SearchButtonMobileProps {
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
  handleAddToSearchHistory: (data: { term: string; path: string }) => void;
  handleGetSuggestions: (searchQueryDeferred: any) => { data: any; error: any };
  // REVIEW LATER
  topSearchData: any;
  // REVIEW LATER
  searchHistoryData: any;
  // REVIEW LATER
  handleClearSearchHistory: any;
}
