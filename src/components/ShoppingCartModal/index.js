import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { getUserProducts } from "../../services/userProfile";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from "@material-ui/core/Modal";
import { If } from "../If";
import { classMap } from "../../util/classMap";

const mapStateProps = (state) => ({
  productInfo: getUserProducts(state),
});

class ShoppingCartModal extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    const classes = classMap({
      "gn-shopping_cart_modal": true,
      "gn-shopping_cart_modal-full": this.props.productInfo.length > 0,
    });

    return (
      <div className={classes}>
        <div onClick={() => this.setState({ isVisible: true })}>
          <ShoppingCartIcon />
        </div>
        <Modal
          open={this.state.isVisible}
          onClose={() => this.setState({ isVisible: false })}
          className="gn-shopping_cart_modal-overlay"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="gn-shopping_cart_modal-container">
            <h2>Geaux Cart!</h2>
            <If test={this.props.productInfo.length === 0}>
              <p>Your Cart is currently empty!</p>
            </If>
            <If test={this.props.productInfo.length > 0}>
              {this.props.productInfo.map((product, index) => (
                <div key={index + product.prod.name.substring(2)}>
                  <div className="gn-shopping_cart_modal-products">
                    <p>Name: {product.prod.name}</p>
                    <p className="gn-product-price">
                      Price: {product.prod.price}{" "}
                    </p>
                  </div>
                  <p>
                    <a
                      className="gn-product-link"
                      href={product.prod.link}
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
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateProps)(ShoppingCartModal);
