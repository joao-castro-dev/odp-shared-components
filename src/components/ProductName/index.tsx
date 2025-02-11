import styles from "./productName.module.css";
import { ProductNameProps } from "../../types/productName";

const ProductName = ({
  name,
  className
}: ProductNameProps) => {
  return (
    <div className={`${className} ${styles.name}`}>
      <p>{name}</p>
    </div>
  );
};

export { ProductName };
