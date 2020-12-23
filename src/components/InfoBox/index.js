import "./styles.scss";
import React from "react";
import { connect } from "react-redux";
import { getChannelInfo } from "../../services/channelInfo";

const mapStateProps = (state) => ({
  channelInfo: getChannelInfo(state),
});

class InfoBox extends React.Component {
  render() {
    return (
      <div className="gn-info_box">
        <img src={this.props.channelInfo.channelIcon} />
        <div className="gn-info_box-channel_info">
          <span> {this.props.channelInfo.channelName} </span>
          <span> {this.props.channelInfo.channelNumber}</span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateProps)(InfoBox);
