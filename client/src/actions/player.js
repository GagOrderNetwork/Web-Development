import * as ACTIONS from "../constants/player";

export function updateVideo(video) {
  return {
    type: ACTIONS.UPDATE_VIDEO,
    video: video,
    videoId: video[0].videoId
  };
}
