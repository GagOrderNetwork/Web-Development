import * as ACTIONS from "../constants/player";

const INITIAL_STATE = {
  video: [
    {
      videoId: "6i0-cK64gYo",
      title: "BODEGA BAMZ INTERVIEW",
      runtime: 30,
      start: 16,
      end: 17
    },
    {
      videoId: "p13XJByy6Lc",
      title: "ZELOOPERZ INTERVIEW",
      runtime: 30,
      start: 17,
      end: 18
    },
    {
      videoId: "ycAtj4KPHtc",
      title: "DENZEL CURRY INTERVIEW",
      runtime: 30,
      start: 18,
      end: 19
    },
    {
      videoId: "PJj9aaPBqZY",
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
