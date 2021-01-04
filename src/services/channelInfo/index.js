import { combineReducers } from "redux";
import { createSelector } from "reselect";
import gx from "../../assets/icons/gx.png";

const initialState = {
  channelName: "GeauxInfo",
  channelNumber: 411,
  channelIcon: gx,
  videoId: "https://www.wim.tv/embed/?cast=c6d90fc6-12f1-45fa-a89b-1ad6be6b7308&autostart=true",
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
