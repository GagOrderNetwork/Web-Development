import { combineReducers } from "redux";
import { createSelector } from "reselect";

const initialState = {
  userProducts: [],
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
  userProducts,
});

/* OTHER REDUCERS */

function userInfo(state = "", action) {
  switch (action.type) {
    case "SET_ID":
      return {
        userId: action.info.userId,
      };
      break;
    default:
      return state;
  }
}

function userProducts(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (
        !state.userProducts.find((x) => {
          x.name === action.info.product.name;
        })
      ) {
        state.userProducts.push(action.info.product);
      }

      return {
        userProducts: state.userProducts,
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

export const getProductInfo = createSelector(
  (state) => state && state.userProfile,
  (info) => {
    return info.userProducts || [];
  }
);

export const getUserProducts = createSelector(getProductInfo, (info) => {
  return info.userProducts;
});
