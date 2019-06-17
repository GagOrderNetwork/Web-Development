import * as ACTIONS from "../constants/";

const INITIAL_STATE = {
  episode: {
    videoId: "6i0-cK64gYo",
    title: "BODEGA BAMZ INTERVIEW",
    runtime: 30,
    start: 16,
    end: 17
  },
  channel: { channelName: "G-Soul" }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EPISODE:
      return {
        ...state,
        isFetching: true,
        episode: action.episode,
        channel: action.channel
      };
    default:
      return state;
  }
};
