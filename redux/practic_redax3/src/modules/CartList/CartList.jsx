import { useDispatch, useSelector } from "react-redux";
import { getProductSelector } from "../../redux/products/productsSelector";
import {
  remove,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/products/productsSlice";

function CartList() {
  const dispatch = useDispatch();

  function onRemoveProduct(id) {
    dispatch(remove(id));
  }

  const onIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };
  const onDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const products = useSelector(getProductSelector);

  const elements = products.map(({ id, name, price }) => (
    <li key={id}>
      <p>{name}</p>
      <p>Price: {price}</p>
      <button onClick={() => onRemoveProduct(id)} type="button">
        remove
      </button>
      <button onClick={() => onIncrementQuantity(id)} type="button">
        +
      </button>
      <button onClick={() => onDecrementQuantity(id)} type="button">
        "-"
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
}
export default CartList;
