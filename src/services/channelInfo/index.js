import { combineReducers } from "redux";
import { createSelector } from "reselect";

const initialState = {
  channelName: "GeauxInfo",
  channelNumber: 411,
  channelIcon: "",
  videoId: "https://www.dailymotion.com/video/x7t6quu",
};

/* ACTION TYPES */
const CHANGE_VIDEO = "CHANGE_VIDEO";

/* ACTION CREATORS */
export const setVideoInfo = (info) => ({ type: CHANGE_VIDEO, info });

/* ROOT REDUCER */
export const channelInfo = combineReducers({
  videoInfo,
});

/* OTHER REDUCERS */

function videoInfo(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_VIDEO":
      return {
        channelName: action.info.channelName,
        channelNumber: action.info.channelNumber,
        channelIcon: action.info.channelIcon,
        videoId: action.info.videoId,
      };
    default:
      return state;
  }
}

/* STATE SELECTORS */
export const getChannelInfo = createSelector(
  (state) => state && state.channelInfo,
  (info) => info.videoInfo || {}
);

export const getVideoId = createSelector(
  getChannelInfo,
  (info) => info.videoId
);
