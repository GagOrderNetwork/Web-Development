import React from "react";
import _ from "lodash";

const Channel = props => {
  function onClick(episode, channel) {
    props.updateVideo(episode);
    props.updateEpisode(episode[0], channel);
  }

  return (
    <div
      className="channel-info"
      onClick={onClick.bind(null, props.episode, props.channel)}
    >
      <span className="number">{props.channelNumber}</span>
      <p className="channel-name">{props.channelName}</p>
    </div>
  );
};

export default Channel;
