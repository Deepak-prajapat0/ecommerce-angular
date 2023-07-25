import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../state/productState";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstants";

export const selectProductState = createFeatureSelector<ProductState>(PRODUCT_SUCCESS);

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.product
);