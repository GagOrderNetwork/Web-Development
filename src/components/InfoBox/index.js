import "./styles.scss";
import React from "react";
import { connect } from "react-redux";

class InfoBox extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="gn-info_box">
        <div className="gn-info_box-channel_info">
          <span> {this.props.channelNumber}</span>
          <span> {this.props.channelName} </span>
        </div>
      </div>
    );
  }
}
const mapStateProps = state => ({
  videoId: state.videoId,
  channelName: state.channelName,
  channelNumber: state.channelNumber
});

export default connect(mapStateProps)(InfoBox);
