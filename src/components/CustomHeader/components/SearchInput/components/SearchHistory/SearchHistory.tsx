import {
  SearchHistory as UISearchHistory,
  SearchHistoryTerm as UISearchHistoryTerm,
  useSearch,
} from "@faststore/ui";
import useSearchHistory from "src/sdk/search/useSearchHistory";
import { SearchHistoryItem } from "./SearchHistoryType";

import styles from "./SearchHistory.module.scss";

const SearchHistory = ({ ...props }) => {
  const search = useSearch();

  const { searchHistory, clearSearchHistory } = useSearchHistory();

  if (!searchHistory.length) {
    return null;
  }

  return (
    <UISearchHistory
      title="You Recently Searched:"
      onClear={clearSearchHistory}
      className={`${styles.searchHistory}`}
      {...props}
    >
      {searchHistory.map((item: SearchHistoryItem) => (
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
