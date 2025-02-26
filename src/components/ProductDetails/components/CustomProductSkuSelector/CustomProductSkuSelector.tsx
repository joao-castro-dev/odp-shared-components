import {
  CustomProductSkuSelectorProps,
  Variation,
} from "./CustomProductSkuSelectorTypes";

import styles from "./CustomProductSkuSelector.module.scss";

export function CustomProductSkuSelector({
  variations,
}: CustomProductSkuSelectorProps) {
  return (
    <div className={styles.productDetails__skuSelector__wrapper}>
      {variations.map((variation: Variation) => {
        return <p>{variation.title}</p>;
      })}
    </div>
  );
}
