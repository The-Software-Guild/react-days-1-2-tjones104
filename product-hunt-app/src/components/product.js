import { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <p>
          <b>Product:</b> {this.props.name}
        </p>
        <p className="upvotes">
          <b>Upvotes:</b> {this.props.upvotes}
        </p>
        <p className="downvotes">
          <b>Downvotes:</b> {this.props.downvotes}
        </p>
      </div>
    );
  }
}

export default Product;
