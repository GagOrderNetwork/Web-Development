import * as ACTIONS from "../constants/player";

const INITIAL_STATE = {
  videoId: "rJ2R3BVJd-s"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VIDEO:
      return {
        ...state,
        isFetching: true,
        videoId: action.videoId
      };
    default:
      return state;
  }
};
