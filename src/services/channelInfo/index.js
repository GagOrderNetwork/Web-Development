import { combineReducers } from "redux";
import { createSelector } from "reselect";
import gx from "../../assets/icons/gx.png";

const initialState = {
  channelName: "GeauxInfo",
  channelNumber: 411,
  channelIcon: gx,
  videoId: "https://www.youtube.com/watch?v=gPPBOpTcHT8&list=PLXQmsxcbaFYM4tRm4WNRRgecVL5ha6df0&ab_channel=onairgag",
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
