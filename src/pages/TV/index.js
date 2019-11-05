import "./styles.scss";
import React from "react";
import { connect } from "react-redux";

import { ChannelList } from "../../components/ChannelList";
import { EpisodeList } from "../../components/EpisodeList";
import InfoBox from "../../components/InfoBox";
import { Player } from "../../components/Player";
import { Nav } from "../../components/Nav";
import { data } from "../../database";

class TV extends React.Component {
  render() {
    const onClick = event => {
      console.log(event);
      debugger;
      this.setState({ currentVideo: event.target.episodes[0].videoId });
    };

    const tvData = Object.entries(data);

    return (
      <div className="gn-tv">
        <Player videoId={this.props.videoId} />
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

const mapStateProps = state => ({
  videoId: state.videoId
});

export default connect(mapStateProps)(TV);

// "videoseries?list=RDMMFEUaB2jV_kM&"
