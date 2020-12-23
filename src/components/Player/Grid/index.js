import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { setProductInfo } from "../../../services/channelInfo";

const mapDispatchProps = {
  setProductInfo,
};

function PlayerGrid(props) {
  let grid = [];
  let clickableBlocks = [];

  for (let step = 0; step < 80; step++) {
    grid.push({ block: `block-${step}` });
  }

  const findCommonElement = (gridArray, dataArray) => {
    // Loop for gridArray
    for (let i = 0; i < gridArray.length; i++) {
      // Loop for dataArray
      for (let j = 0; j < dataArray.length; j++) {
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (gridArray[i].block === dataArray[j].block) {
          // Return if common element found
          clickableBlocks.push(dataArray[j]);
        }
      }
    }

    // Return if no common element exist
    return false;
  };

  let clickDataArr = [props.productInfo];
  findCommonElement(grid, clickDataArr);

  return (
    <div className="gn-player_grid">
      {grid.map((item) => {
        if (
          clickableBlocks.length > 0 &&
          clickableBlocks[0].block === item.block
        ) {
          return (
            <div
              className={`gn-player_grid-block ${item.block}`}
              key={item.block}
              onClick={() => {
                props.setProductInfo({
                  name: clickableBlocks[0].product1.name,
                  price: clickableBlocks[0].product1.price,
                  link: clickableBlocks[0].product1.link,
                });
              }}
            />
          );
        } else {
          return (
            <div
              className={`gn-player_grid-block ${item.block}`}
              key={item.block}
              onClick={() => console.log("noLuck")}
            />
          );
        }
      })}
    </div>
  );
}

export default connect(null, mapDispatchProps)(PlayerGrid);
