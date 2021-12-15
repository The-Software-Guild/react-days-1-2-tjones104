import { Component } from "react";
import Product from "./product";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: Math.random(),
          name: "Milk",
          upvotes: Math.floor(Math.random() * 1000),
          downvotes: Math.floor(Math.random() * 1000),
        },
        {
          id: Math.random(),
          name: "Tea",
          upvotes: Math.floor(Math.random() * 1000),
          downvotes: Math.floor(Math.random() * 1000),
        },
        {
          id: Math.random(),
          name: "Coffee",
          upvotes: Math.floor(Math.random() * 1000),
          downvotes: Math.floor(Math.random() * 1000),
        },
      ],
      order: "Descending",
    };
    this.handleSort = this.handleSort.bind(this);
  }
  componentDidMount() {
    this.setState({
      products: this.state.products.sort((a, b) => b.id - a.id),
    });
  }

  handleSort() {
    if (this.state.order === "Descending") {
      this.setState({
        products: this.state.products.sort((a, b) => b.upvotes - a.upvotes),
      });
      this.setState({ order: "Ascending" });
    } else {
      this.setState({
        products: this.state.products.sort((a, b) => a.upvotes - b.upvotes),
      });
      this.setState({ order: "Descending" });
    }
  }

  render() {
    const productComponents = this.state.products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        upvotes={product.upvotes}
        downvotes={product.downvotes}
      />
    ));

    return (
      <div>
        <div className="list-header">
          <h1></h1>
          <h1 className="app-name">Product List</h1>
          <button className="sort" onClick={this.handleSort}>
            Sort by: {this.state.order}
          </button>
        </div>
        <div className="list-product">{productComponents}</div>
      </div>
    );
  }
}

export default ProductList;
