export interface SearchHistoryItem {
  term: string;
  path: string;
}

export interface SearchHistoryProps {
  // REVIEW LATER
  searchHistoryData: any;
  // REVIEW LATER
  handleClearSearchHistory: any;
  props?: Record<string, string | number | Object>;
}
