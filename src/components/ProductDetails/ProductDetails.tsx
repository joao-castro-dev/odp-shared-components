import React, { useEffect, useMemo } from "react";
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
  availability,
  sku,
  price,
  listPrice,
  unitMultiplier,
  buyButtonTitle,
  isValidating,
  quantity,
  setQuantity,
  notAvailableButtonTitle,
  useUnitMultiplier,
  productPageSpecifications,
  cart,
  buyProps,
  onInvalidQuantity,
}: ProductDetailsProps) {
  const [isInCart, setIsInCart] = React.useState(false);

  const outOfStock = useMemo(
    () => availability === "https://schema.org/OutOfStock",
    [availability]
  );

  const productSellingUInit = getProductSellingUnit(productPageSpecifications);

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
