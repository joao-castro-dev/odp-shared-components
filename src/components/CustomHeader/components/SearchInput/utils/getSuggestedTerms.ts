import { MAX_SUGGESTIONS } from "./consts";

const getSuggestedTerms = (data: any) => {
  return (data?.search?.suggestions?.terms ?? []).slice(0, MAX_SUGGESTIONS);
};

export default getSuggestedTerms;
