import React from "react";
import { ButtonProps, Button as UIButton } from "@faststore/ui";

import styles from "./Button.module.scss";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <UIButton className={styles.button} {...props}>
      {children}
    </UIButton>
  );
}
