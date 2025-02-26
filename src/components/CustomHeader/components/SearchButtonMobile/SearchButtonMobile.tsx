import { useRef, useState } from "react";

import Icons from "../../../Icons";
import Modal from "../../../Modal";
import type {
  FormattedSearchState,
  SearchInputRef,
  SearchState,
} from "../SearchInput/SearchInputTypes";
import SearchInput from "../SearchInput";

import styles from "./SearchButtonMobile.module.scss";
import { SearchButtonMobileProps } from "./SearchButtonMobileTypes";

const SearchButtonMobile = ({
  currency,
  locale,
  handleProductLink,
  handleInitSearchState,
  handleFormatSearchState,
  handleSendAnalytics,
  topSearchData,
  handleFormatSearchPath,
  handleGetSuggestions,
  handleAddToSearchHistory,
  searchHistoryData,
  handleClearSearchHistory,
}: SearchButtonMobileProps) => {
  const inputRef = useRef<SearchInputRef>(null);
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const switchModalState = () => {
    setIsSearchOpened(!isSearchOpened);
  };

  if (isSearchOpened) {
    return (
      <Modal
        isOpen={isSearchOpened}
        onClose={switchModalState}
        data-testid="search-modal-mobile"
      >
        <SearchInput
          ref={inputRef}
          data-fs-search
          className={styles.search__modal__input}
          data-testid="header-search-input"
          currency={currency}
          locale={locale}
          handleProductLink={handleProductLink}
          handleInitSearchState={handleInitSearchState}
          handleFormatSearchState={handleFormatSearchState}
          handleSendAnalytics={handleSendAnalytics}
          topSearchData={topSearchData}
          handleFormatSearchPath={handleFormatSearchPath}
          handleGetSuggestions={handleGetSuggestions}
          handleAddToSearchHistory={handleAddToSearchHistory}
          searchHistoryData={searchHistoryData}
          handleClearSearchHistory={handleClearSearchHistory}
        />
      </Modal>
    );
  }

  return (
    <div
      className={styles.search__button__mobile__wrapper}
      data-testid="header-search-icon-mobile_wrapper"
      onClick={switchModalState}
    >
      <Icons
        icon="search"
        color="#fff"
        data-fs-search-icon
        data-icon="search"
        className={styles.search__button__mobile__icon}
        data-testid="header-search-icon-mobile"
      />
    </div>
  );
};

export { SearchButtonMobile };
