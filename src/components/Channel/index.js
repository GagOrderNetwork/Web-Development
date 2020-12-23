import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import { setVideoInfo } from "../../services/channelInfo";
import { If } from "../If";

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
      <div className="gn-channel">
        <span>{this.props.channelNumber}</span>
        <Card className="gn-channel-card" onClick={this.onClick}>
          <img src={this.props.channelIcon} />
          <If test={!this.props.channelIcon}>
            <span>{this.props.channelName}</span>
          </If>
        </Card>
      </div>
    );
  }
}

export default connect(null, mapDispatchProps)(Channel);
