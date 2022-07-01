import { Component } from "react";
import { getAlbums } from "../../Sheared/serveces/albums";
class Albums extends Component {
  state = {
    page: 1,
    limit: 20,
    items: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.fetchAlbums();
  }
  componentDidUpdate(prevProrp, { page }) {
    if (page !== this.state.page) {
      this.fetchAlbums();
    }
  }
  async fetchAlbums() {
    const { page, limit } = this.state;
    try {
      this.setState({ loading: true });
      const data = await getAlbums(page, limit);
      this.setState(({ items }) => {
        return { items: [...items, ...data], loading: false };
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  loadMore = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  render() {
    const { loading, items, error } = this.state;
    const elements = items.map(({ id, title }) => {
      return <li key={id}>{title}</li>;
    });

    if (loading && !items.length) {
      return <p>loading...</p>;
    }
    if (error) {
      return <p>Error Что могло пойти неК</p>;
    }
    return (
      <div>
        <ul>{elements}</ul>
        <button onClick={this.loadMore} type="button">
          Load More
        </button>
      </div>
    );
  }
}

export default Albums;
