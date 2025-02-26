import { useCallback, useMemo } from "react";
import { Currency, PriceFormatterOptions } from "../types/formattedPrice";

const usePriceFormatter = ({
  decimals,
  currency,
  locale,
}: Omit<PriceFormatterOptions, "price">) => {
  return useCallback(
    (price: number) =>
      Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: decimals ? 2 : 0,
      }).format(price),
    [currency.code, locale, decimals]
  );
};

const useFormattedPrice = (
  price: number,
  currency: Currency,
  locale: string
) => {
  const formatter = usePriceFormatter({ decimals: true, currency, locale });

  return useMemo(() => formatter(price), [formatter, price]);
};

export default useFormattedPrice;
