import s from "./itemsList.module.css";
const ItemsList = (props) => {
  const { items, onClick } = props;
  const elements = items.map((el, indx) => {
    const { id, name, bought } = el;
    return (
      <li
        className={bought ? s.red : ""}
        onClick={() => onClick(indx)}
        key={id}
      >
        {name}
      </li>
    );
  });
  const totalItems = items.reduce((acc, el) => {
    return el.bought ? acc : acc + Number(el.quantity);
  }, 0);
  const totalPrice = items.reduce((acc, el) => {
    return el.bought ? acc : acc + el.quantity * el.price;
  }, 0);
  return (
    <div className={s.itemList}>
      <p>Total items: {totalItems} </p>
      <p>Total price: {totalPrice}</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default ItemsList;
