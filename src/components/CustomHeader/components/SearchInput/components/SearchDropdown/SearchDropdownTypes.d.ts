import { Currency } from "../../../../../../types/formattedPrice";

interface Image {
  alternateName: string;
  url: string;
}

interface Seller {
  identifier: string;
}

interface Offer {
  availability: string;
  listPrice: number;
  price: number;
  quantity: number;
  seller: Seller;
}

export interface SearchDropdownProps {
  sort?: string;
  currency: Currency;
  locale: string;
  handleProductLink: (
    product: any,
    selectedOffer: number,
    index: number
  ) => { href: any; onClick: any; baseLinkProps: any };
  handleFormatSearchPath: (data: { term: { value: string }; sort: any }) => any;
  // REVIEW LATER
  topSearchData: any;
  // REVIEW LATER
  searchHistoryData: any;
  // REVIEW LATER
  handleClearSearchHistory: any;
  otherProps?: Record<string, string | number | Object>;
}

export interface ProductSearchProps {
  id: string;
  sku: string;
  slug: string;
  name: string;
  gtin: string;
  brand: {
    brandName: string;
    name: string;
  };
  image: Image[];
  isVariantOf: {
    name: string;
    productGroupID: string;
  };
  offers: {
    lowPrice: number;
    offers: Offer[];
  };
  clusterHighlights: ProductCluster[];
}
