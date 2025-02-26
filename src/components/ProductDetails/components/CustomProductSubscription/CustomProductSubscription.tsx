import { CustomProductSubscriptionProps } from "./CustomProductSubscriptionTypes";

import styles from "./CustomProductSubscription.module.scss";

export function CustomProductSubscription({
  buttonTitle,
}: CustomProductSubscriptionProps) {
  return (
    <div>
      <p className={styles.productDetails__subscription}>{buttonTitle}</p>
    </div>
  );
}
