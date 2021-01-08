import { combineReducers } from "redux";
import { createSelector } from "reselect";
import gx from "../../assets/icons/gx.png";

const initialState = {
  channelName: "GeauxInfo",
  channelNumber: 411,
  channelIcon: gx,
  videoId: "https://www.youtube.com/watch?v=Ph_GRKvvqK4&list=PLXQmsxcbaFYNpyqFpmZDszZSmRqogb52B&ab&autoplay=1&mute=1&vq=hd1080",
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
