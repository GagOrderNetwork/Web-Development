// import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { getProductInfo } from "../../services/userProfile";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from "@material-ui/core/Modal";

const mapStateProps = (state) => ({
  productInfo: getProductInfo(state),
});

class ShoppingCartModal extends React.Component {
  state = {
    isVisible: false,
  };
  render() {
    return (
      <div className="gn-shopping_cart_modal">
        <div onClick={() => this.setState({ isVisible: true })}>
          <ShoppingCartIcon />
        </div>
        <Modal
          open={this.state.isVisible}
          onClose={() => this.setState({ isVisible: false })}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>Hi</div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateProps)(ShoppingCartModal);
