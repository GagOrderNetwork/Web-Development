import * as ACTIONS from "../constants/";

const INITIAL_STATE = {
  episode: {
    videoId: "D6-2KFlXbAw",
    title: "Geaux Interviews",
    runtime: 30,
    start: 16,
    end: 17
  },
  channel: { channelName: "Geaux Network" }
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
