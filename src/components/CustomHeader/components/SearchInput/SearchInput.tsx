import {
  Suspense,
  forwardRef,
  lazy,
  useDeferredValue,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// REVIEW LATER
// import { useRouter } from "next/router";

// REVIEW LATER
// import type { SearchState } from "@faststore/sdk";
import {
  SearchProviderContextValue,
  SearchInput as FSSearchInput,
  SearchInputField,
} from "@faststore/ui";

import formatSearchPath from "./utils/formatSearchPath";
import useOnClickOutside from "./utils/useOnClickOutside";
import sendSearchAnalytics from "./utils/sendSearchAnalytics";
import getSuggestedTerms from "./utils/getSuggestedTerms";
import getSuggestedProducts from "./utils/getSuggestedProducts";
import type { SearchInputProps, SearchInputRef } from "./SearchInputTypes";

import styles from "./SearchInput.module.scss";
import Icons from "../../../Icons";

const SearchDropdown = lazy(() => import("./components/SearchDropdown"));

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(
  function SearchInput(
    {
      onSearchClick,
      buttonTestId = "fs-search-button",
      containerStyle,
      sort,
      placeholder,
      className,
      currency,
      locale,
      handleProductLink,
      handleInitSearchState,
      handleFormatSearchState,
      handleSendAnalytics,
      topSearchData,
      handleFormatSearchPath,
      handleAddToSearchHistory,
      handleGetSuggestions,
      searchHistoryData,
      handleClearSearchHistory,
      ...otherProps
    },
    ref
  ) {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchDropdownVisible, setSearchDropdownVisible] =
      useState<boolean>(false);

    const searchRef = useRef<HTMLDivElement>(null);

    const searchQueryDeferred = useDeferredValue(searchQuery);

    useImperativeHandle(ref, () => ({
      resetSearchInput: () => setSearchQuery(""),
      setSearchDropdownVisible: (isVisible: boolean) =>
        setSearchDropdownVisible(isVisible),
    }));

    const onSearchSelection: SearchProviderContextValue["onSearchSelection"] = (
      term,
      path
    ) => {
      handleAddToSearchHistory({ term, path });
      sendSearchAnalytics(term, handleSendAnalytics);
      setSearchDropdownVisible(false);
      setSearchQuery(term);
    };

    useOnClickOutside(searchRef, () => setSearchDropdownVisible(false));

    const { data, error } = handleGetSuggestions(searchQueryDeferred);

    const isLoading = !error && !data;

    const terms = getSuggestedTerms(data);
    const products = getSuggestedProducts(data);

    return (
      <FSSearchInput
        ref={searchRef}
        visibleDropdown={searchDropdownVisible}
        onSearchSelection={onSearchSelection}
        term={searchQueryDeferred}
        terms={terms}
        products={products}
        isLoading={isLoading}
        className={`${styles.search__wrapper} ${className}`}
      >
        <SearchInputField
          ref={ref}
          buttonProps={{
            onClick: onSearchClick,
            testId: buttonTestId,
          }}
          placeholder={placeholder ?? "Search"}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSubmit={(term) => {
            const path = formatSearchPath({
              term,
              // REVIEW LATER
              sort: sort as any, //SearchState["sort"],
              handleInitSearchState,
              handleFormatSearchState,
            });

            onSearchSelection(term, path);
            window.location.href = path;
          }}
          onFocus={() => setSearchDropdownVisible(true)}
          value={searchQuery}
          buttonIcon={
            <Icons
              icon="search"
              aria-label={`search icon`}
              data-fs-search-icon
            />
          }
          className={`${styles.search__form}`}
          {...otherProps}
        />

        {searchDropdownVisible && (
          <Suspense fallback={null}>
            <SearchDropdown
              sort={sort}
              currency={currency}
              locale={locale}
              handleProductLink={handleProductLink}
              topSearchData={topSearchData}
              handleFormatSearchPath={handleFormatSearchPath}
              searchHistoryData={searchHistoryData}
              handleClearSearchHistory={handleClearSearchHistory}
            />
          </Suspense>
        )}
      </FSSearchInput>
    );
  }
);

export default SearchInput;
