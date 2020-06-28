import "./styles.scss";
import React from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

import { Button } from "@material-ui/core";
import { If } from "../If";
import { Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    volume: 0.8,
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    return (
      <div className="gn-player">
        <div className="gn-player-video">
          <ReactPlayer
            className="react-player"
            url={this.props.videoId}
            playing
            ref={this.ref}
            width={"100%"}
            volume={this.state.volume}
          />
        </div>
        <div className="gn-player-controls">
          <div className="gn-player-volume">
            <Grid container spacing={2}>
              <Grid item xs>
                <VolumeDown />
              </Grid>
              <Grid item>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={this.state.volume}
                  onChange={this.handleVolumeChange}
                />
              </Grid>
              <Grid item xs>
                <VolumeUp />
              </Grid>
            </Grid>
          </div>
          <If test={this.props.userId}>
            <div className="gn-player-shopping_cart">
              <ShoppingCartIcon />
            </div>
          </If>
          <Button onClick={this.handleClickFullscreen}>Fullscreen</Button>
        </div>
      </div>
    );
  }
}

export { Player };

// `https://www.youtube.com/embed/${
//   this.props.videoId
// }rel=0&autoplay=1&controls=0`

// For Non-Playlist put '?' at the end for videoId
// ex. "NvqKZHpKs-g?"

// For Playlist put '&' at the end for videoId
// ex. "videoseries?list=PLXDm2cr3AfgWNE167nmXmeEI4fIsT2Ee_&"

// Youtube Playlist
// src="https://www.youtube.com/embed/videoseries?list=PLXDm2cr3AfgWNE167nmXmeEI4fIsT2Ee_&rel=0&autoplay=1&controls=0"
