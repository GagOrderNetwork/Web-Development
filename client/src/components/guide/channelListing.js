import React from "react";
import _ from "lodash";

import Channel from "./channel";

const category = "innactive row channel";

const ChannelListing = props => (
  <ul className="listing">
    {_.map(props.channel, (channel, key) => (
      <li className={category} key={key}>
        <Channel
          updateVideo={props.updateVideo}
          channel={channel}
          channelName={channel["channelName"]}
          channelNumber={channel["number"]}
          updateEpisode={props.updateEpisode}
          episode={channel["episodes"]}
        />
      </li>
    ))}
  </ul>
);

export default ChannelListing;
