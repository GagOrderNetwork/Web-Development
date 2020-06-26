import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import { setVideoInfo } from "../../services/channelInfo";

const mapDispatchProps = {
  setVideoInfo,
};

class Channel extends React.Component {
  onClick = () => {
    this.props.setVideoInfo({
      channelName: this.props.channelName,
      channelNumber: this.props.channelNumber,
      channelIcon: this.props.channelIcon || "",
      videoId: this.props.videoId,
    });
  };

  render() {
    return (
      <Card className="gn-channel" onClick={this.onClick}>
        <span>{this.props.channelNumber}</span>
        <img src={this.props.channelIcon} />
        <span>{this.props.channelName}</span>
      </Card>
    );
  }
}

export default connect(null, mapDispatchProps)(Channel);
