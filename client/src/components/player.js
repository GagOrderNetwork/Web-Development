import React from "react";
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import Logo from "./logo.js";

const Player = props => {
  const playVideo = event => {
    event.target.playVideo();
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
          onReady={playVideo}
          onStateChange={playVideo}
          videoId={props.videoId}
        />
      </div>
    </section>
  );
};

export default Player;
