import { CustomProductPriceProps } from "./CustomProductPriceTypes";

import styles from "./CustomProductPrice.module.scss";

export function CustomProductPrice({
  hasPromotion = false,
  listPrice,
  price,
  productSellingUInit,
}: CustomProductPriceProps) {
  return (
    <div className={styles.productDetails__price}>
      {hasPromotion ? (
        <div data-fs-product-details-promotion>
          <span data-fs-product-details-promotion-price>
            {`$${listPrice.toFixed(2)} Sale`}
          </span>
          <div data-fs-product-details-promotion-wrapper>
            <span data-fs-product-details-promotion-original>
              {`Reg. $${price}`}
            </span>
            <span data-fs-product-details-promotion-savings>
              {`(You save $${(listPrice - price).toFixed(2)})`}
            </span>
          </div>
        </div>
      ) : (
        <span data-fs-product-details-price>
          {`$${price}/${productSellingUInit.toLowerCase()}`}
        </span>
      )}
    </div>
  );
}
