import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import YouTube from "react-youtube";
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
    console.log(this.state);
    console.log(videoIds);

    const opts = {
      playerVars: {
        controls: 0,
        disablekb: 1
      }
    };

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
            opts={opts}
            onReady={event => event.target.playVideo()}
            onStateChange={event => event.target.playVideo()}
            onEnd={() => {
              this.setState(() => {
                return { currentVideoIndex: currentVideoIndex + 1 };
              });
            }}
            videoId={videoIds[currentVideoIndex]}
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
  null
)(Player);
