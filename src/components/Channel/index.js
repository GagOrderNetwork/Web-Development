import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";

class Channel extends React.Component {
  render() {
    return (
      <Card
        className="gn-channel"
        onClick={() =>
          this.props.dispatch({
            type: "CHANGE_VIDEO",
            channelName: this.props.channelName,
            channelNumber: this.props.channelNumber,
            channelIcon: this.props.channelIcon || '',
            videoId: this.props.videoId
          })
        }
      >
        <span>{this.props.channelNumber}</span>
        <img src={this.props.channelIcon} />
        <span>{this.props.channelName}</span>
      </Card>
    );
  }
}

export default connect()(Channel);
