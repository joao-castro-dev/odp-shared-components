import {
  SearchTop as UISearchTop,
  SearchTopTerm as UISearchTopTerm,
  useSearch,
} from "@faststore/ui";

import { SearchState } from "@faststore/sdk";
import { formatSearchPath } from "src/sdk/search/formatSearchPath";
import useTopSearch from "src/sdk/search/useTopSearch";
import type { SearchTopProps } from "./SearchTopTypes";
import { MAX_TOP_SEARCH_TERMS } from "../../utils/consts";

function SearchTop({ topTerms = [], sort, ...otherProps }: SearchTopProps) {
  const search = useSearch();

  const { data } = useTopSearch();
  const terms = (data?.search.suggestions.terms ?? topTerms).slice(
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
            href: formatSearchPath({
              term: term.value,
              sort: sort as SearchState["sort"],
            }),
            onClick: () =>
              search?.values?.onSearchSelection?.(
                term.value,
                formatSearchPath({
                  term: term.value,
                  sort: sort as SearchState["sort"],
                })
              ),
          }}
        />
      ))}
    </UISearchTop>
  );
}

export { SearchTop };
