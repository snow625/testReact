import { useState, useCallback } from "react";
import FormBuy from "./FormBuy";
import ItemsList from "./ItemsList";
import { nanoid } from "nanoid";

import s from "./byList.module.css";
const ByList = () => {
  const [items, setItems] = useState([]);

  
  
  const toggleBought = useCallback(
    (idx) => {
      setItems((prevState) => {
        const newItems = prevState.map((el) => ({ ...el }));
        newItems[idx].bought = !newItems[idx].bought;
        return [...newItems];
      });
    },
    [setItems]
  );



  const addItem = useCallback(
    (obj) => {
      const newObj = { ...obj, id: nanoid(), bought: false };
      setItems((prevState) => {
        return [...prevState, newObj];
      });
    },
    [setItems]
  );

  return (
    <div className={s.container}>
      <FormBuy onSubmit={addItem} />
      <ItemsList items={items} onClick={toggleBought} />
    </div>
  );
};

export default ByList;
