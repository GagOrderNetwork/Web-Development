import { combineReducers } from "redux";
import { createSelector } from "reselect";

const initialState = {
  userId: "",
  userProducts: {},
};

/* ACTION TYPES */
const SET_ID = "SET_ID";
const ADD_PRODUCT = "ADD_PRODUCT";

/* ACTION CREATORS */
export const setUserId = (info) => ({ type: SET_ID, info });
export const setUserProduct = (info) => ({ type: ADD_PRODUCT, info });

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
        userProducts: state.userProducts,
      };
      break;
    case "ADD_PRODUCT":
      return {
        userId: state.userId,
        userProducts: action.info.product,
      };
      break;
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
