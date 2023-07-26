import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./productReducer";


export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.products
);