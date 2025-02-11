import React from "react";

import styles from "./productPrice.module.css";
import { ProductPriceProps } from "../../types/productPrice";

const ProductPrice = ({
  price,
  className
}: ProductPriceProps) => {
  return (
    <div className={`${className} ${styles.price}`}>
      <p>{price}</p>
    </div>
  );
};

export { ProductPrice };
