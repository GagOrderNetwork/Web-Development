import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import Logo from "./logo.js";

// const videos = [
//   {
//     videoId: "6i0-cK64gYo",
//     title: "BODEGA BAMZ INTERVIEW",
//     runtime: 30,
//     start: 16,
//     end: 17
//   },
//   {
//     videoId: "p13XJByy6Lc",
//     title: "ZELOOPERZ INTERVIEW",
//     runtime: 30,
//     start: 17,
//     end: 18
//   },
//   {
//     videoId: "ycAtj4KPHtc",
//     title: "DENZEL CURRY INTERVIEW",
//     runtime: 30,
//     start: 18,
//     end: 19
//   },
//   {
//     videoId: "PJj9aaPBqZY",
//     title: "HOLYCHILD INTERVIEW",
//     runtime: 30,
//     start: 20,
//     end: 23
//   }
// ];

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoIndex: 0
    };
  }

  playVideo = event => {
    event.target.playVideo();
  };

  onEnd = () => {
    videoObject = video[1];
  };

  // let videoObject = video[0];
  render() {
    // const currentVideo = this.state.videos[this.state.currentVideoIndex];
    const { video, videoId } = this.props;
    console.log(videoId);

    return (
      <section className="video-main">
        <div className="video-header">
          <NavLink to="/">
            <div className="video-circle">
              <Logo />
            </div>
          </NavLink>
          <div className="video-live">
            <span> Live TV </span>
          </div>
          <NavLink to="/my-account">
            <div className="video-circle">
              <span> Avatar </span>
            </div>
          </NavLink>
        </div>
        <div className="video-player">
          <YouTube
            onReady={event => event.target.playVideo()}
            onStateChange={event => event.target.playVideo()}
            videoId={videoId}
          />
        </div>
      </section>
    );
  }
}

Player.PropTypes = {};

function mapStateToProps(state) {
  return {
    video: state.player.video,
    videoId: state.player.videoId
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Player);

// onEnd={() =>
//   this.setState(prevState => {
//     return { currentVideoIndex: prevState.currentVideoIndex + 1 };
//   })
// }
