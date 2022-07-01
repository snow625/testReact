import { Component } from "react";
import s from "./formBuy.module.css";

class FormBuy extends Component {
  state = {
    name: "",
    quantity: "",
    price: "",
    isUrgent: false,
    type: "chemistry",
  };
  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    const newValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: newValue });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      name: "",
      quantity: "",
      price: "",
      isUrgent: false,
      type: "",
    });
  };

  render() {
    const { name, quantity, price, isUrgent, type } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Название
          <input
            onChange={handleChange}
            name="name"
            value={name}
            placeholder="Введите название"
            className={s.input}
            required
          />
        </label>
        <label className={s.label}>
          Количество
          <input
            onChange={handleChange}
            className={s.input}
            placeholder="Введите количество"
            name="quantity"
            value={quantity}
            required
            pattern="[0-9]*"
          />
        </label>
        <label className={s.label}>
          Цена
          <input
            onChange={handleChange}
            className={s.input}
            placeholder="Введите цену"
            name="price"
            value={price}
            required
            pattern="[0-9]*[.]?[0-9]+"
          />
        </label>
        <label className={s.label}>
          Срочная покупка
          <input
            onChange={handleChange}
            name="isUrgent"
            checked={isUrgent}
            type="checkbox"
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Тип покупки
          <select
            onChange={handleChange}
            name="type"
            value={type}
            className={s.input}
          >
            <option value="chemistry">бытовая химия</option>
            <option value="products">продукты</option>
            <option value="other">другое</option>
          </select>
        </label>
        <button className={s.btn} type="submit">
          Купить
        </button>
      </form>
    );
  }
}

export default FormBuy;
