import { formatSearchState, initSearchState } from "@faststore/sdk";

import { FormatSearchPath } from "../SearchInputTypes";

const formatSearchPath = ({ term, sort }: FormatSearchPath) => {
  const { pathname, search } = formatSearchState(
    initSearchState({
      term,
      sort,
      base: "/s",
    })
  );

  return `${pathname}${search}`;
};

export default formatSearchPath;
