import { combineReducers } from "redux";
import { createSelector } from "reselect";

const initialState = {
  userId: "",
};

/* ACTION TYPES */
const SET_ID = "SET_ID";

/* ACTION CREATORS */
export const setUserId = (info) => ({ type: SET_ID, info });

/* ROOT REDUCER */
export const userProfile = combineReducers({
  userInfo,
});

/* OTHER REDUCERS */

function userInfo(state = initialState, action) {
  switch (action.type) {
    case "SET_ID":
      return {
        userId: action.info.userId,
      };
    default:
      return state;
  }
}

/* STATE SELECTORS */
export const getUserInfo = createSelector(
  (state) => state && state.userProfile,
  (info) => {
    return info.userInfo || {};
  }
);

export const getUserId = createSelector(getUserInfo, (info) => {
  return info.userId;
});
