import "./styles.scss";
import React from "react";

class EpisodeList extends React.Component {
  render() {
    return (
      <div className="gn-episode_list">
        {this.props.data.map((datum, key) => {
          return (
            <div key={key}>
              <div>
                {datum[1].map((d, key) => {
                  return (
                    <div className="gn-episode_list-episodes" key={key}>
                      {d.episodes.map((epi, key) => {
                        return <span key={key}>{epi.title}</span>;
                      })}
                    </div>
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

export { EpisodeList };
