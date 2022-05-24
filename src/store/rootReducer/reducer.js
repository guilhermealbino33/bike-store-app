import { handleActions } from "redux-actions";
import { getAllCountProduct, getPublishedCountProduct } from "./actions";

const defaultState = {
  totalProductCount: 0,
  publishedProductCount: 0,
  productCreatedAfterSomeDateCount: 0,
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
  },
  defaultState
);

export default appReducer;
