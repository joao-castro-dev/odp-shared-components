// import type { SearchEvent } from "@faststore/sdk";

const sendSearchAnalytics = async (
  term: string,
  handleSendAnalytics: <
    U extends { name: string; params: Record<string, any> }
  >(
    event: U
  ) => void
) => {
  // REVIEW LATER
  // handleSendAnalytics<SearchEvent>({
  handleSendAnalytics<any>({
    name: "search",
    params: { search_term: term },
  });
};

export default sendSearchAnalytics;
