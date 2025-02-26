import { MAX_SUGGESTIONS } from "./consts";

const getSuggestedProducts = (data: any) => {
  return (data?.search?.suggestions?.products ?? []).slice(0, MAX_SUGGESTIONS);
};

export default getSuggestedProducts;
