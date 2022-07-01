import { Component } from "react";
import FormBuy from "./FormBuy";
import ItemsList from "./ItemsList";
import { nanoid } from "nanoid";

import s from "./byList.module.css";
class ByList extends Component {
  state = {
    items: [],
  };

  toggleBought = (idx) => {
    console.log(idx);
    this.setState((prevState) => {
      const newItems = prevState.items.map((el) => ({ ...el }));
      newItems[idx].bought = !newItems[idx].bought;
      return {
        items: newItems,
      };
    });
  };

  addItem = (obj) => {
    const newObj = { ...obj, id: nanoid(), bought: false };
    this.setState((prevState) => {
      return { items: [...prevState.items, newObj] };
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className={s.container}>
        <FormBuy onSubmit={this.addItem} />
        <ItemsList items={items} onClick={this.toggleBought} />
      </div>
    );
  }
}

export default ByList;
