import type { HTMLAttributes } from "react";
import type { StoreSuggestionTerm } from "@generated/graphql";

export interface SearchTopProps extends HTMLAttributes<HTMLDivElement> {
  topTerms?: StoreSuggestionTerm[];
  sort?: string;
}
