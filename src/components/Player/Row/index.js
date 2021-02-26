import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { setUserProduct } from "../../../services/userProfile";
import { getUserId } from "../../../services/userProfile";
import axios from "axios";

const mapDispatchProps = {
  setUserProduct,
};

const mapStateProps = (state) => ({
  userId: getUserId(state),
});

function PlayerRow(props) {
  let row = [];
  let clickableBlocks = [];

  for (let step = 0; step < 10; step++) {
    row.push({ block: `${props.row}-block-${step}` });
  }

  const findCommonElement = (rowArray, dataArray) => {
    // Loop for rowArray
    for (let i = 0; i < rowArray.length; i++) {
      // Loop for dataArray
      for (let j = 0; j < dataArray.length; j++) {
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (rowArray[i].block === dataArray[j].block) {
          // Return if common element found
          clickableBlocks.push(dataArray[j]);
        }
      }
    }

    // Return if no common element exist
    return false;
  };

  let clickDataArr = [props.productInfo];
  findCommonElement(row, clickDataArr);

  return (
    <div className="gn-player_row">
      {row.map((item) => {
        if (
          clickableBlocks.length > 0 &&
          clickableBlocks[0].block === item.block
        ) {
          return (
            <div
              className={`gn-player_row-block-interactive ${item.block}`}
              key={item.block}
              onClick={() => {
                props.setUserProduct({
                  product: clickableBlocks[0].product,
                });

                const prodInfo = {
                  userId: props.userId,
                  name: clickableBlocks[0].product.name,
                  link: clickableBlocks[0].product.link,
                  price: clickableBlocks[0].product.price,
                };

                axios
                  .post("https://www.geaux.tech/products/add", prodInfo)
                  .then((res) => {
                    console.log("Product Added");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            />
          );
        } else {
          return (
            <div
              className={`gn-player_row-block ${item.block}`}
              key={item.block}
            />
          );
        }
      })}
    </div>
  );
}

export default connect(mapStateProps, mapDispatchProps)(PlayerRow);
