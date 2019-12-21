import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const player = document.getElementById("player");
    // player.playVideo();
  }

  render() {
    const video_props = {
      src: `https://www.youtube.com/embed/${
        this.props.videoId
      }rel=0&autoplay=1&controls=0&enablejsapi=1`,
      title: "Geaux Network Tv",
      frameBorder: 0,
      allowFullScreen: true,
      allow: "autoplay; encrypted-media"
    };

    return (
      <div className="gn-player">
        <div className="gn-player-video">
          <iframe id="player" {...video_props} />
        </div>
      </div>
    );
  }
}

export { Player };

//
// `https://www.youtube.com/embed/${
//   this.props.videoId
// }rel=0&autoplay=1&controls=0`

// For Non-Playlist put '?' at the end for videoId
// ex. "NvqKZHpKs-g?"

// For Playlist put '&' at the end for videoId
// ex. "videoseries?list=PLXDm2cr3AfgWNE167nmXmeEI4fIsT2Ee_&"

// Youtube Playlist
// src="https://www.youtube.com/embed/videoseries?list=PLXDm2cr3AfgWNE167nmXmeEI4fIsT2Ee_&rel=0&autoplay=1&controls=0"
