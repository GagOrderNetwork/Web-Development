import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Channel extends React.Component {
  render() {
    return (
      <div
        className="gn-channel"
        onClick={() =>
          this.props.dispatch({
            type: "CHANGE_VIDEO",
            channelName: this.props.channelName,
            channelNumber: this.props.channelNumber,
            videoId: this.props.videoId
          })
        }
      >
        <span>{this.props.channelNumber}</span>
        <span>{this.props.channelName}</span>
      </div>
    );
  }
}

export default connect()(Channel);
