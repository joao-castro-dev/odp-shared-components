import sendAnalytics from "../../../../utils/sendAnalytics";

import type { SearchEvent } from "@faststore/sdk";

const sendSearchAnalytics = async (term: string) => {
  sendAnalytics<SearchEvent>({
    name: "search",
    params: { search_term: term },
  });
};

export default sendSearchAnalytics;
