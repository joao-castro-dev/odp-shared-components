import type { HTMLAttributes } from "react";
import type { StoreSuggestionTerm } from "@generated/graphql";

export interface SearchTopProps extends HTMLAttributes<HTMLDivElement> {
  topTerms?: StoreSuggestionTerm[];
  sort?: string;
  // REVIEW LATER
  topSearchData: any;
  // REVIEW LATER
  handleFormatSearchPath: (data: { term: { value: string }; sort: any }) => any;
}
