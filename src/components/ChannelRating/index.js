import "./styles.scss";
import React from "react";

import { If } from "../If";
import { classMap } from "../../util/classMap";

class ChannelRating extends React.Component {
  state = {
    isVisible: false,
  };
  render() {
    let blocks = [];

    for (let step = 0; step < 11; step++) {
      blocks.push({ rating: `${step} Stars` });
    }

    const containerClasses = classMap({
      "gn-channel_rating-container": true,
      "gn-channel_rating-container-open": this.state.isVisible,
    });

    return (
      <div className="gn-channel_rating">
        <div
          className="gn-channel_rating-text"
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
        >
          Rate the Channel
        </div>
        <div className={containerClasses}>
          {blocks.map((item) => {
            return (
              <div
                className={`gn-channel_rating-block ${item.rating}`}
                key={item.rating}
                onClick={() => {
                  axios
                    .post("https://www.geaux.tech/products/add")
                    .then((res) => {
                      console.log("Product Added");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                {item.rating}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ChannelRating;
