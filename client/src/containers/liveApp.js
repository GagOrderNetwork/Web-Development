// import "../styles/main.scss";

import React, { Component, PropTypes } from "react";

import Player from "../components/player";
import Guide from "./guide";
import VideoSidebar from "./videoSidebar";

const LiveApp = () => {
  return (
    <div className="app">
      <Player />
      <Guide />
      <VideoSidebar />
    </div>
  );
};

export default LiveApp;
