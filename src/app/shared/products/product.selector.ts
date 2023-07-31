// import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
// import { ProductState } from "./productReducer";
// import { Product } from "src/app/models/productModel";

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './product.state';
import { Product } from 'src/app/models/productModel';

// export const selectProductState = createFeatureSelector<ProductState>('products');

// export const selectProduct = createSelector(
//   selectProductState,
//   (state) => state.products
// );
// export const selectSingleProductState = createFeatureSelector<Product>('product');

// export const selectSingleProduct = createSelector(
//   selectSingleProductState,
//   (state) => state
// );

const productsState = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  productsState,
  (state) => state.products
);


const productState = createFeatureSelector<Product>('product');

export const getProduct = createSelector(productState,(state)=>state)


