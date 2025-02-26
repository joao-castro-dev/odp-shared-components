import {
  SearchAutoComplete as FSSearchAutoComplete,
  SearchAutoCompleteTerm as FSSearchAutoCompleteTerm,
  useSearch,
} from "@faststore/ui";

// REVIEW LATER
// import type { SearchState } from "@faststore/sdk";

import styles from "./SearchAutoComplete.module.scss";
import { SearchAutoCompleteProps } from "./SearchAutoCompleteTypes";

const SearchAutoComplete = ({
  sort,
  handleFormatSearchPath,
}: SearchAutoCompleteProps) => {
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
              href: handleFormatSearchPath({
                term: { value: suggestion },
                // REVIEW LATER
                // sort: sort as SearchState["sort"],
                sort: sort as any,
              }),
              onClick: () =>
                onSearchSelection?.(
                  suggestion,
                  handleFormatSearchPath({
                    term: { value: suggestion },
                    // REVIEW LATER
                    // sort: sort as SearchState["sort"],
                    sort: sort as any,
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
