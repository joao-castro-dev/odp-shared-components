import { FormatSearchPathProps } from "../SearchInputTypes";

const formatSearchPath = ({
  term,
  sort,
  handleInitSearchState,
  handleFormatSearchState,
}: FormatSearchPathProps) => {
  const { pathname, search } = handleFormatSearchState(
    handleInitSearchState({
      term,
      sort,
      base: "/s",
    })
  );

  return `${pathname}${search}`;
};

export default formatSearchPath;
