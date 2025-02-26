import { CustomProductAddToListProps } from "./CustomProductAddToListTypes";

import styles from "./CustomProductAddToList.module.scss";

export function CustomProductAddToList({
  buttonTitle,
}: CustomProductAddToListProps) {
  return <p className={styles.productDetails__addToList}>{buttonTitle}</p>;
}
