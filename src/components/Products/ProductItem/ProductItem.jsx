import styles from "./productItem.module.css";

const ProductItem = (props) => {
  const { name, price, onClick, id } = props;
  return (
    <li className={styles.item} onClick={() => onClick(id)}>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
    </li>
  );
};
export default ProductItem;
