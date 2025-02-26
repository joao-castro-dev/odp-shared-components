import {
  SearchTop as UISearchTop,
  SearchTopTerm as UISearchTopTerm,
  useSearch,
} from "@faststore/ui";

// REVIEW LATER
// import type { SearchState } from "@faststore/sdk";

import { MAX_TOP_SEARCH_TERMS } from "../../utils/consts";
import { SearchTopProps } from "./SearchTopTypes";

function SearchTop({
  topTerms = [],
  sort,
  topSearchData,
  handleFormatSearchPath,
  ...otherProps
}: SearchTopProps) {
  const search = useSearch();

  const terms = (topSearchData?.search?.suggestions?.terms ?? topTerms).slice(
    0,
    MAX_TOP_SEARCH_TERMS
  );

  if (terms.length === 0) {
    return null;
  }

  return (
    <UISearchTop title="Top Search:" {...otherProps}>
      {terms.map((term: { value: string }, index: number) => (
        <UISearchTopTerm
          key={index}
          value={term.value}
          index={index}
          linkProps={{
            href: handleFormatSearchPath({
              term: term,
              // REVIEW LATER
              // sort: sort as SearchState["sort"],
              sort: sort as any,
            }),
            onClick: () =>
              search?.values?.onSearchSelection?.(
                term.value,
                handleFormatSearchPath({
                  term: term,
                  // REVIEW LATER
                  // sort: sort as SearchState["sort"],
                  sort: sort as any,
                })
              ),
          }}
        />
      ))}
    </UISearchTop>
  );
}

export { SearchTop };
