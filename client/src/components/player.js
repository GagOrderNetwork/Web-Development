import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import Logo from "./logo.js";

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoIndex: 0
    };
  }

  render() {
    let { currentVideoIndex } = this.state;

    const videoIds = this.props.video.map(video => {
      return video.videoId;
    });

    const videoEnded = () => {
      this.setState(() => {
        return { currentVideoIndex: currentVideoIndex + 1 };
      });
    };

    setTimeout(videoEnded, 300000);

    const video_props = {
      src: videoIds[currentVideoIndex],
      title: "Geaux Network Tv",
      frameBorder: 0,
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true",
      allowFullScreen: true,
      allow: "autoplay"
    };

    console.log(this.state);
    console.log(videoIds[currentVideoIndex]);

    return (
      <section className="video-main">
        <div className="video-header">
          <a href="https://geauxnet.com">
            <div className="video-circle">
              <Logo />
            </div>
          </a>
          {/*
          <div className="video-live">
            <a href="https://geauxnet.com">
              <span> Live TV </span>
            </a>
          </div>

          <NavLink to="/my-account">
            <div className="video-circle">
              <span> Avatar </span>
            </div>
          </NavLink>
          */}
        </div>
        <div className="video-player">
          {/*<YouTube
            opts={opts}
            onReady={event => event.target.playVideo()}
            onStateChange={event => event.target.playVideo()}
            onEnd={() => {
              this.setState(() => {
                return { currentVideoIndex: currentVideoIndex + 1 };
              });
            }}
            videoId={videoIds[currentVideoIndex]}
          />*/}
          <iframe {...video_props} />
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
  null
)(Player);
