import "./styles.scss";
import React from "react";
import { connect } from "react-redux";

class InfoBox extends React.Component {
  render() {
    return (
      <div className="gn-info_box">
        <div className="gn-info_box-channel_info">
          <span> {this.props.channelNumber}</span>
          <span> {this.props.channelName} </span>
        </div>
        <img src={this.props.channelIcon} />
      </div>
    );
  }
}
const mapStateProps = state => ({
  videoId: state.videoId,
  channelName: state.channelName,
  channelNumber: state.channelNumber,
  channelIcon: state.channelIcon
});

export default connect(mapStateProps)(InfoBox);
