import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./productReducer";
import { Product } from "src/app/models/productModel";


export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.products
);
export const selectSingleProductState = createFeatureSelector<Product>('products');

export const selectSingleProduct = createSelector(
  selectSingleProductState,
  (state) => state
);