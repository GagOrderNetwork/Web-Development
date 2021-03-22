import "./styles.scss";
import React from "react";

import { ChannelList } from "../../components/ChannelList";
import { EpisodeList } from "../../components/EpisodeList";
import InfoBox from "../../components/InfoBox";
import { data } from "../../database";

class Guide extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedCategory: "All",
  };

  onCategoryClick = (event) => {
    this.setState({ selectedCategory: event.target.innerText });
  };

  render() {
    const tvData = Object.entries(data);
    const tvCategories = [
      tvData.find((element) => element[0] === this.state.selectedCategory),
    ];

    const currentCategory =
      tvCategories[0] === undefined ? tvData : tvCategories;

    return (
      <div className="gn-tv-guide">
        <div className="gn-tv-guide-categories">
          <div onClick={this.onCategoryClick}>All</div>
          <div onClick={this.onCategoryClick}>Business/News</div>
          <div onClick={this.onCategoryClick}>Kids</div>
          <div onClick={this.onCategoryClick}>Discover</div>
          <div onClick={this.onCategoryClick}>Music</div>
          <div onClick={this.onCategoryClick}>Science/Tech</div>
          <div onClick={this.onCategoryClick}>Explore.org</div>
        </div>
        <div className="gn-tv-guide-list">
          <ChannelList data={currentCategory} />
          <EpisodeList data={currentCategory} />
          <InfoBox data={currentCategory} />
        </div>
      </div>
    );
  }
}

export { Guide };
