import { Dispatch, SetStateAction } from "react";

interface ItemOffered {
  sku: string;
}

export interface CartItem {
  itemOffered: ItemOffered;
}

export type ProductDetailsFragment_ProductFragment = {
  sku: string;
  name: string;
  gtin: string;
  description: string;
  unitMultiplier: number | null;
  id: string;
  isVariantOf: {
    name: string;
    productGroupID: string;
    skuVariants: {
      activeVariations: unknown | null;
      slugsMap: unknown | null;
      availableVariations: unknown | null;
    } | null;
  };
  image: Array<{ url: string; alternateName: string }>;
  brand: { name: string };
  offers: {
    lowPrice: number;
    lowPriceWithTaxes: number;
    offers: Array<{
      availability: string;
      price: number;
      priceWithTaxes: number;
      listPrice: number;
      listPriceWithTaxes: number;
      seller: { identifier: string };
    }>;
  };
  additionalProperty: Array<{
    propertyID: string;
    name: string;
    value: unknown;
    valueReference: unknow;
  }>;
};

export interface ProductDetailsProps {
  product: ProductDetailsFragment_ProductFragment;
  buyButtonTitle: string;
  buyButtonIcon: {
    alt: string;
    icon: string;
  };
  isValidating: boolean;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  notAvailableButtonTitle: string;
  useUnitMultiplier?: boolean;
  taxesConfiguration?: {
    usePriceWithTaxes?: boolean;
    taxesLabel?: string;
  };
  // REFACTOR TYPINGS
  // productContext: PDPContext;
  productContext: any;
  cart: any;
  useBuyButton: any;
  // useBuyButton: (item: CartItem | CartItem[] | null) => {
  //   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   "data-testid": string;
  //   "data-sku": string;
  //   "data-seller": string;
  // };
}

// faststore core types

export interface CartItem extends SDKCartItem, CartItemFragment {}

interface SDKCartItem {
  id: string;
  quantity: number;
}

interface CartItemFragment {
  quantity: number;
  price: number;
  priceWithTaxes: number;
  listPrice: number;
  listPriceWithTaxes: number;
  seller: { identifier: string };
  itemOffered: {
    sku: string;
    name: string;
    unitMultiplier: number | null;
    gtin: string;
    image: Array<{ url: string; alternateName: string }>;
    brand: { name: string };
    isVariantOf: {
      productGroupID: string;
      name: string;
      skuVariants: {
        activeVariations: any | null;
        slugsMap: any | null;
        availableVariations: any | null;
      } | null;
    };
    additionalProperty: Array<{
      propertyID: string;
      name: string;
      value: any;
      valueReference: any;
    }>;
  };
}

export interface PDPContext {
  data?: ServerProductQueryQuery &
    ClientProductQueryQuery["product"] & { isValidating?: boolean };
}

export type ServerProductQueryQuery = {
  product: {
    sku: string;
    gtin: string;
    name: string;
    description: string;
    releaseDate: string;
    unitMultiplier: number | null;
    id: string;
    seo: { title: string; description: string; canonical: string };
    brand: { name: string };
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>;
    };
    image: Array<{ url: string; alternateName: string }>;
    offers: {
      lowPrice: number;
      highPrice: number;
      lowPriceWithTaxes: number;
      priceCurrency: string;
      offers: Array<{
        availability: string;
        price: number;
        priceValidUntil: string;
        priceCurrency: string;
        itemCondition: string;
        priceWithTaxes: number;
        listPrice: number;
        listPriceWithTaxes: number;
        seller: { identifier: string };
      }>;
    };
    isVariantOf: {
      name: string;
      productGroupID: string;
      skuVariants: {
        activeVariations: any | null;
        slugsMap: any | null;
        availableVariations: any | null;
      } | null;
    };
    availableInstallments: Array<{
      installmentPaymentSystemName: string;
      installmentValue: number;
      installmentInterest: number;
      installmentNumber: number;
    }>;
    categoryTree: {
      name: string | null;
      titleTag: string | null;
      href: string | null;
      slug: string | null;
    } | null;
    properties: Array<{
      name: string | null;
      originalName: string | null;
      values: Array<{ val: string | null } | null> | null;
    }>;
    productPageSpecifications: Array<{
      name: string | null;
      originalName: string | null;
      specifications: Array<{
        name: string | null;
        originalName: string | null;
        values: Array<{ val: string | null } | null> | null;
      } | null> | null;
    } | null> | null;
    recommendations: {
      similars: Array<{
        productName: string | null;
        link: string | null;
        color: string | null;
        img: string | null;
        properties: Array<{
          name: string | null;
          originalName: string | null;
          values: Array<{ val: string | null } | null> | null;
        } | null> | null;
      } | null> | null;
    } | null;
    additionalProperty: Array<{
      propertyID: string;
      name: string;
      value: any;
      valueReference: any;
    }>;
  };
};

export type ClientProductQueryQuery = {
  product: {
    sku: string;
    name: string;
    gtin: string;
    description: string;
    unitMultiplier: number | null;
    id: string;
    isVariantOf: {
      name: string;
      productGroupID: string;
      skuVariants: {
        activeVariations: any | null;
        slugsMap: any | null;
        availableVariations: any | null;
      } | null;
    };
    image: Array<{ url: string; alternateName: string }>;
    brand: { name: string };
    offers: {
      lowPrice: number;
      lowPriceWithTaxes: number;
      offers: Array<{
        availability: string;
        price: number;
        priceWithTaxes: number;
        listPrice: number;
        listPriceWithTaxes: number;
        seller: { identifier: string };
      }>;
    };
    additionalProperty: Array<{
      propertyID: string;
      name: string;
      value: any;
      valueReference: any;
    }>;
  };
};
