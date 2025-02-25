import {
  SearchProviderContextValue,
  SearchProductItem as UISearchProductItem,
  SearchProductItemContent as UISearchProductItemContent,
  SearchProductItemImage as UISearchProductItemImage,
  useSearch,
} from "@faststore/ui";

import useFormattedPrice from "../../../../../../hooks/useFormattedPrice";

import { SearchProductItemProps } from "./SearchProductItemTypes";
import styles from "./SearchProductItem.module.scss";

const SearchProductItem = ({
  product,
  index,
  currency,
  locale,
  handleProductLink,
  ...otherProps
}: SearchProductItemProps) => {
  const { values } = useSearch();
  const { onSearchSelection } = values as SearchProviderContextValue;

  const { href, onClick, ...baseLinkProps } = handleProductLink(
    product,
    0,
    index
  );

  const {
    isVariantOf: { name },
    image: [img],
    offers: {
      lowPrice: spotPrice,
      offers: [{ listPrice }],
    },
  } = product;

  const linkProps = {
    href,
    onClick: () => {
      onClick();
      onSearchSelection?.(name, href);
    },
    ...baseLinkProps,
  };

  return (
    <div className={styles.productSugestions__wrapper}>
      <UISearchProductItem linkProps={linkProps} {...otherProps}>
        <UISearchProductItemImage>
          {/* REVIEW THIS: SHOULD WE ADD NEXT TO THIS PACKAGE TO USE IMAGE FROM NEXT */}
          <img src={img.url} alt={img.alternateName} width={56} height={56} />
        </UISearchProductItemImage>
        <UISearchProductItemContent
          title={name}
          price={{
            value: spotPrice,
            listPrice: listPrice,
            formatter: (price: number) =>
              useFormattedPrice(price, currency, locale),
          }}
        ></UISearchProductItemContent>
      </UISearchProductItem>
    </div>
  );
};

export { SearchProductItem };
