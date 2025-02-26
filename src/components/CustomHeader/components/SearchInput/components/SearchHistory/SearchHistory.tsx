import {
  SearchHistory as UISearchHistory,
  SearchHistoryTerm as UISearchHistoryTerm,
  useSearch,
} from "@faststore/ui";
import { SearchHistoryItem, SearchHistoryProps } from "./SearchHistoryType";

import styles from "./SearchHistory.module.scss";

const SearchHistory = ({
  searchHistoryData,
  handleClearSearchHistory,
  ...props
}: SearchHistoryProps) => {
  const search = useSearch();

  if (!searchHistoryData.length) {
    return null;
  }

  return (
    <UISearchHistory
      title="You Recently Searched:"
      onClear={handleClearSearchHistory}
      className={`${styles.searchHistory}`}
      {...props}
    >
      {searchHistoryData.map((item: SearchHistoryItem) => (
        <UISearchHistoryTerm
          key={item.term}
          value={item.term}
          linkProps={{
            href: item.path,
            onClick: () =>
              search?.values?.onSearchSelection?.(item.term, item.path),
          }}
        />
      ))}
    </UISearchHistory>
  );
};

export default SearchHistory;
