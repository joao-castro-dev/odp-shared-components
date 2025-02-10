import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

interface ProductPriceProps {
  value: string;
  className?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ value, className }) => {
  return <p className={`${styles.title} ${className}`}>{value}</p>;
};

ProductPrice.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default ProductPrice;
