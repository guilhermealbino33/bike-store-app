import { handleActions } from "redux-actions";
import {
  getAllCountProduct,
  getPublishedCountProduct,
  getAllLocations,
} from "./actions";

const defaultState = {
  totalProductCount: 0,
  publishedProductCount: 0,
  productCreatedAfterSomeDateCount: 0,
  allLocations: "None",
};

const appReducer = handleActions(
  {
    [getAllCountProduct.fail]: (state, { payload }) => ({
      ...state,
      totalProductCount: payload.data.count,
    }),
    [getAllCountProduct.success]: (state, { payload }) => ({
      ...state,
      totalProductCount: payload.data.count,
    }),

    [getPublishedCountProduct.fail]: (state, { payload }) => ({
      ...state,
      publishedProductCount: payload.data.count,
    }),
    [getPublishedCountProduct.success]: (state, { payload }) => ({
      ...state,
      publishedProductCount: payload.data.count,
    }),
    [getAllLocations.fail]: (state, { payload }) => ({
      ...state,
      allLocations: payload.data,
    }),
    [getAllLocations.success]: (state, { payload }) => ({
      ...state,
      allLocations: payload.data,
    }),
  },
  defaultState
);
export default appReducer;
