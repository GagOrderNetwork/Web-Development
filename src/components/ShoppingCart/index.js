import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { getUserProducts } from "../../services/userProfile";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { If } from "../If";
import { classMap } from "../../util/classMap";

const mapStateProps = (state) => ({
  productInfo: getUserProducts(state),
});

class ShoppingCart extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    const classes = classMap({
      "gn-shopping_cart": true,
      "gn-shopping_cart-full": this.props.productInfo.length > 0,
    });

    const containerClasses = classMap({
      "gn-shopping_cart-container": true,
      "gn-shopping_cart-container-open": this.state.isVisible,
    });

    return (
      <div className={classes}>
        <div
          className="gn-shopping_cart-icon"
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
        >
          <ShoppingCartIcon />
        </div>
        <div className={containerClasses}>
          <If test={this.props.productInfo.length === 0}>
            <h4>Your Geaux cart is empty.</h4>
            <p>Keeep watching Geaux TV and discover something just for you.</p>
          </If>
          <If test={this.props.productInfo.length > 0}>
            {this.props.productInfo.map((product, index) => (
              <div key={index + product.name.substring(2)}>
                <div className="gn-shopping_cart-products">
                  <p>Name: {product.name}</p>
                  <p className="gn-product-price">Price: {product.price} </p>
                </div>
                <p>
                  <a
                    className="gn-product-link"
                    href={product.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Link: Buy Now{" "}
                  </a>{" "}
                </p>
              </div>
            ))}
          </If>
        </div>
      </div>
    );
  }
}

export default connect(mapStateProps)(ShoppingCart);
