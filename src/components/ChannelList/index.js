import "./styles.scss";
import React from "react";
import Channel from "../Channel";

class ChannelList extends React.Component {
  render() {
    return (
      <div className="gn-channel_list">
        {this.props.data.map((datum, key) => {
          return (
            <div key={key}>
              <div className="gn-channel_list-info">{datum[0]}</div>
              <div>
                {datum[1].map((d, key) => {
                  return (
                    <Channel
                      key={key}
                      videoId={d.episodes[0].videoId}
                      channelName={d.channelName}
                      channelNumber={d.number}
                      channelIcon={d.channelIcon}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export { ChannelList };
