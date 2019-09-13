import * as ACTIONS from "../constants/player";

const INITIAL_STATE = {
  video: [
    {
      videoId:
        "https://youtube.com/embed/6i0-cK64gYo?rel=0&amp;autoplay=1&controls=0",
      title: "BODEGA BAMZ INTERVIEW",
      runtime: 30,
      start: 16,
      end: 17
    },
    {
      videoId:
        "https://youtube.com/embed/p13XJByy6Lc?rel=0&amp;autoplay=1&controls=0",
      title: "ZELOOPERZ INTERVIEW",
      runtime: 30,
      start: 17,
      end: 18
    },
    {
      videoId:
        "https://youtube.com/embed/ycAtj4KPHtc?rel=0&amp;autoplay=1&controls=0",
      title: "DENZEL CURRY INTERVIEW",
      runtime: 30,
      start: 18,
      end: 19
    },
    {
      videoId:
        "https://youtube.com/embed/PJj9aaPBqZY?rel=0&amp;autoplay=1&controls=0",
      title: "HOLYCHILD INTERVIEW",
      runtime: 30,
      start: 20,
      end: 23
    }
  ],

  videoId: "6i0-cK64gYo"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VIDEO:
      return {
        ...state,
        isFetching: true,
        video: action.video,
        videoId: action.video[0].videoId
      };
    default:
      return state;
  }
};
