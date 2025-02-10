import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

interface ProductNameProps {
    name: string;
    className?: string;
}

const ProductName: React.FC<ProductNameProps> = ({ name, className }) => {
    return <h1 className={`${styles.title} ${className}`}>{name}</h1>;
};

ProductName.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
};

export default ProductName;
