import React, { useEffect, useMemo, useState } from "react";
import getProductSellingUnit from "../../utils/getProductSellingUnit";
import { Button } from "@faststore/ui";

import CustomProductPrice from "./components/CustomProductPrice";
import CustomProductQuantitySelector from "./components/CustomProductQuantitySelector";
import CustomProductAddToList from "./components/CustomProductAddToList";
import CustomProductSubscription from "./components/CustomProductSubscription";
import CustomProductSkuSelector from "./components/CustomProductSkuSelector";
import CustomProductShipping from "./components/CustomProductShipping";
import CustomProductAlsoAvailableIn from "./components/CustomProductAlsoAvailableIn";

import styles from "./ProductDetails.module.scss";
import { ProductDetailsProps } from "./ProductDetailsTypes";
import { isProductInCart } from "./utils/isProductInCart";

export function ProductDetails({
  product,
  buyButtonTitle,
  isValidating,
  quantity,
  setQuantity,
  notAvailableButtonTitle,
  useUnitMultiplier,
  productContext,
  cart,
  useBuyButton,
  onInvalidQuantity,
}: ProductDetailsProps) {
  const [isInCart, setIsInCart] = React.useState(false);

  const {
    id,
    sku,
    gtin,
    unitMultiplier,
    name: variantName,
    brand,
    isVariantOf,
    image: productImages,
    additionalProperty,
    offers: {
      offers: [
        {
          availability,
          price,
          priceWithTaxes,
          listPrice,
          seller,
          listPriceWithTaxes,
        },
      ],
    },
  } = product;

  const buyProps = useBuyButton({
    id,
    price,
    priceWithTaxes,
    listPrice,
    listPriceWithTaxes,
    seller,
    quantity,
    itemOffered: {
      sku,
      // @ts-ignore next-line REVIEW THAT LATER
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
      additionalProperty,
      unitMultiplier,
    },
  });

  const outOfStock = useMemo(
    () => availability === "https://schema.org/OutOfStock",
    [availability]
  );

  const productSellingUInit = getProductSellingUnit(
    productContext?.data?.product?.productPageSpecifications
  );

  const hasPromotion = listPrice > price;

  useEffect(() => {
    if (sku && cart) {
      setIsInCart(isProductInCart(cart.items, sku));
    }
  }, [cart]);

  return (
    <section className={styles.productDetails}>
      {!outOfStock ? (
        <section data-fs-product-details-values>
          <CustomProductPrice
            hasPromotion={hasPromotion}
            listPrice={listPrice}
            price={price}
            productSellingUInit={productSellingUInit ?? "ea"}
          />
          <CustomProductQuantitySelector
            buyButtonTitle={buyButtonTitle}
            isValidating={isValidating}
            setQuantity={setQuantity}
            useUnitMultiplier={useUnitMultiplier}
            unitMultiplier={unitMultiplier}
            isInCart={isInCart}
            buyProps={buyProps}
            sku={sku}
            quantity={quantity}
            onInvalidQuantity={onInvalidQuantity}
          />
          <CustomProductAddToList buttonTitle="Add To List" />
          <CustomProductSubscription buttonTitle="Subscribe" />
          <CustomProductSkuSelector
            variations={[{ title: "Color" }, { title: "Pack" }]}
          />
          <CustomProductAlsoAvailableIn buttonTitle="Also Available In" />
          <CustomProductShipping buttonTitle="Shipping" />
        </section>
      ) : (
        <Button variant="primary" disabled data-fs-buy-button-disabled>
          {notAvailableButtonTitle}
        </Button>
      )}
    </section>
  );
}
