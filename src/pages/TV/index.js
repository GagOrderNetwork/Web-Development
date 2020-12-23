import "./styles.scss";
import React from "react";
import { connect } from "react-redux";

import { Player } from "../../components/Player";
import { MainNav } from "../../components/MainNav";
import { Guide } from "../../blocks/Guide";
import { getVideoId } from "../../services/channelInfo";
import { getUserId, setUserProduct } from "../../services/userProfile";

const mapStateProps = (state) => ({
  videoId: getVideoId(state),
  userId: getUserId(state),
});

const mapDispatchProps = {
  setUserProduct,
};

class TV extends React.Component {
  render() {
    return (
      <div className="gn-tv">
        <MainNav userId={this.props.userId} />
        <Player
          setUserProduct={this.props.setUserProduct}
          userId={this.props.userId}
          videoId={this.props.videoId}
        />
        <Guide />
      </div>
    );
  }
}

export default connect(mapStateProps, mapDispatchProps)(TV);

// "videoseries?list=RDMMFEUaB2jV_kM&"
