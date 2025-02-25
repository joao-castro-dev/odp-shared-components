import {
  SearchAutoComplete as FSSearchAutoComplete,
  SearchAutoCompleteTerm as FSSearchAutoCompleteTerm,
  useSearch,
} from "@faststore/ui";

import { SearchState } from "@faststore/sdk";

import { formatSearchPath } from "src/sdk/search/formatSearchPath";

import styles from "./SearchAutoComplete.module.scss";

const SearchAutoComplete = ({ sort }: { sort?: string }) => {
  const search = useSearch();

  if (!search?.values) {
    return null;
  }

  const {
    values: { onSearchSelection, term, terms },
  } = search;

  if (!terms) return null;

  return (
    <div className={`${styles.autocomplete}`}>
      <p className={`${styles.autocomplete__title}`}>We Recommend:</p>
      <FSSearchAutoComplete>
        {terms?.map(({ value: suggestion }: { value: string }) => (
          <FSSearchAutoCompleteTerm
            key={suggestion}
            term={term}
            suggestion={suggestion}
            icon={false}
            className={`${styles.autocomplete__term}`}
            linkProps={{
              href: formatSearchPath({
                term: suggestion,
                sort: sort as SearchState["sort"],
              }),
              onClick: () =>
                onSearchSelection?.(
                  suggestion,
                  formatSearchPath({
                    term: suggestion,
                    sort: sort as SearchState["sort"],
                  })
                ),
            }}
          />
        ))}
      </FSSearchAutoComplete>
    </div>
  );
};

export { SearchAutoComplete };
