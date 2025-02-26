export interface Currency {
  code: string;
}

export interface PriceFormatterOptions {
  decimals?: boolean;
  currency: Currency;
  locale: string;
}
