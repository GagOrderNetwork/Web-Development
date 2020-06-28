import "./styles.scss";
import React from "react";
import { connect } from "react-redux";

import { ChannelList } from "../../components/ChannelList";
import { EpisodeList } from "../../components/EpisodeList";
import InfoBox from "../../components/InfoBox";
import { Player } from "../../components/Player";
import { Nav } from "../../components/Nav";
import { data } from "../../database";
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
    const tvData = Object.entries(data);

    return (
      <div className="gn-tv">
        <Player
          setProduct={setUserProduct}
          userId={this.props.userId}
          videoId={this.props.videoId}
        />
        <div className="gn-tv-guide">
          <ChannelList data={tvData} />
          <EpisodeList data={tvData} />
          <InfoBox data={tvData} />
        </div>
        <Nav />
      </div>
    );
  }
}

export default connect(mapStateProps, mapDispatchProps)(TV);

// "videoseries?list=RDMMFEUaB2jV_kM&"
