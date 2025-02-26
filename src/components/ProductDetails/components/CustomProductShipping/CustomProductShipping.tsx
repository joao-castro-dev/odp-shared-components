import { CustomProductShippingProps } from "./CustomProductShippingTypes";

import styles from "./CustomProductShipping.module.scss";

export function CustomProductShipping({
  buttonTitle,
}: CustomProductShippingProps) {
  return <p className={styles.productDetails__shipping}>{buttonTitle}</p>;
}
