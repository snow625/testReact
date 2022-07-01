import { Component } from "react";
import ProductItem from "./ProductItem";
import { getProducts, getProductByID } from "../../Sheared/serveces/products";
import Modal from "../Modal/Modal";
import styles from "./products.module.css";

class Products extends Component {
  state = {
    items: [],
    id: null,
    loading: false,
    error: false,
    productContent: {},
    modalOpen: false,
  };

  componentDidMount() {
    this.fethProducts();
  }
  componentDidUpdate(prevProps, { id }) {
    const currentId = this.state.id;
    if (id !== currentId) {
      this.fethProductById();
    }
  }

  fethProductById = async () => {
    this.setState({ loading: true, error: false });
    try {
      const { id } = this.state;
      const data = await getProductByID(id);
      this.setState({ productContent: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  fethProducts = async () => {
    this.setState({ loading: true, error: false });
    try {
      const data = await getProducts();
      this.setState(({ items }) => {
        return { items: [...items, ...data], loading: false };
      });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };
  setProductId = (id) => {
    this.setState({ id, modalOpen: true });
  };

  render() {
    const { items, loading, error, modalOpen } = this.state;
    const { setProductId, closeModal } = this;
    const { name, description, price } = this.state.productContent;
    const elements = items.map((el) => (
      <ProductItem key={el.id} {...el} onClick={setProductId} />
    ));
    return (
      <div>
        {loading && <p>...Loading</p>}
        {error && <p>Что-то пошло не так</p>}
        <ul className={styles.list}>{elements}</ul>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
          </Modal>
        )}
      </div>
    );
  }
}

export default Products;
