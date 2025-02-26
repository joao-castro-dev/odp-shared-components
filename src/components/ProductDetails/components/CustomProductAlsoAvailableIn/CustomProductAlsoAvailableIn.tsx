import { CustomProductAlsoAvailableInProps } from "./CustomProductAlsoAvailableInTypes";

import styles from "./CustomProductAlsoAvailableIn.module.scss";

export function CustomProductAlsoAvailableIn({
  buttonTitle,
}: CustomProductAlsoAvailableInProps) {
  return <p className={styles.productDetails__alsoAvailable}>{buttonTitle}</p>;
}
