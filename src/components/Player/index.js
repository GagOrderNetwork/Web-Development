import "./styles.scss";
import React from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

import { Button } from "@material-ui/core";
import { classMap } from "../../util/classMap";
import { If } from "../If";
import { Grid, Slider } from "@material-ui/core";
import { Fullscreen, VolumeDown, VolumeUp } from "@material-ui/icons";
import PlayerRow from "./Row";

import { productData } from "./productData";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showVolume: false,
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

  onProductClick = (info) => {
    this.props.setUserProduct(info);
  };

  toggleVolume = () => {
    this.setState({ showVolume: !this.state.showVolume });
  };

  render() {
    const productInfo =
      productData.filter((info) => info.videoId === this.props.videoId) || [];

    const classes = classMap({
      "gn-player-volume-slider": true,
      "gn-player-volume-slider-visible": this.state.showVolume,
    });

    return (
      <div className="gn-player">
        <If
          test={this.props.userId && productInfo[0] && productInfo[0].videoId}
        >
          <div className="gn-player-touch_grid">
            <PlayerRow row="row-1" productInfo={productInfo} />
            <PlayerRow row="row-2" productInfo={productInfo} />
            <PlayerRow row="row-3" productInfo={productInfo} />
            <PlayerRow row="row-4" productInfo={productInfo} />
            <PlayerRow row="row-5" productInfo={productInfo} />
            <PlayerRow row="row-6" productInfo={productInfo} />
            <PlayerRow row="row-7" productInfo={productInfo} />
          </div>
        </If>
        <If
          test={
            !this.props.videoId.includes("https://www.wim.tv/") &&
            !this.props.videoId.includes(
              "https://play.streamingvideoprovider.com/"
            )
          }
        >
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
        </If>
        <If
          test={
            this.props.videoId.includes("https://www.wim.tv/") ||
            this.props.videoId.includes(
              "https://play.streamingvideoprovider.com/"
            )
          }
        >
          <div className="gn-player-video-iframe">
            <iframe
              src={this.props.videoId}
              allow="autoplay"
              allowfullscreen=""
              ref={this.ref}
            />
          </div>
        </If>
        <div className="gn-player-controls">
          <div className="gn-player-volume">
            {/* <Grid container spacing={2}>
              <Grid item xs>
                <VolumeDown />
              </Grid>
              <Grid item> */}
            <div className="gn-player-volume-icon" onClick={this.toggleVolume}>
              <VolumeUp />
            </div>
            <div className={classes}>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={this.state.volume}
                onChange={this.handleVolumeChange}
              />
            </div>
            {/* </Grid>
              <Grid item xs> */}
            {/* </Grid>
            </Grid> */}
          </div>
          <Button onClick={this.handleClickFullscreen}>
            <Fullscreen />
          </Button>
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
