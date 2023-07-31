// import { createReducer, on } from '@ngrx/store';
// // import { initialState } from './productState';
// import { loadAllProduct, loadAllProductSuccess, loadProduct,  loadProductSuccess, loadSingleProduct, loadSingleProductSuccess } from './productAction';
// import { Product } from 'src/app/models/productModel';

import { createReducer, on } from "@ngrx/store";
import { initialProductsState, initialProductState } from "./product.state";
import { loadAllProduct, loadAllProductSuccess, loadProduct, loadProductSuccess, loadSingleProduct, loadSingleProductSuccess } from "./productAction";


// // const _productReducers = createReducer(initialState);

// // export function productReducers(state:any,action:any){
// //   return _productReducers(state,action)
// // }

// export interface ProductState {
//   products: ReadonlyArray<Product>;
//   product:Product;
// }

// export const initialState: ProductState = {
//   products: [],
//   product:<Product>{}
// };

// export const productReducers = createReducer(
//   initialState,
//   on(loadProduct, (state) => ({ ...state })),
//   on(loadProductSuccess, (state, { products }) => ({ ...state, ...products })),

//   on(loadAllProduct, (state) => ({ ...state })),
//   on(loadAllProductSuccess, (state, { products }) => ({ ...state, ...products })),

//   on(loadSingleProduct, (state) => ({ ...state })),
//   on(loadSingleProductSuccess, (state, { product }) => ({ ...state, ...product })),
// );

const _productsReducer = createReducer(
  initialProductsState,
  on(loadProduct, (state) => ({ ...state })),
  on(loadProductSuccess, (state, products:{ products:any }) => ({ ...state, ...products })),



  on(loadAllProduct, (state) => ({ ...state })),
  on(loadAllProductSuccess, (state, {products}) => ({
    ...state,
    ...products
  }))
);

const _productReducer = createReducer(
  initialProductState,
  on(loadSingleProduct,(state)=>({...state})),
  on(loadSingleProductSuccess,(state,product:{product: any})=> ({...state,...product}))
)
export function productsReducer(state:any,action:any){
  return _productsReducer(state,action)
}
export function productReducer(state:any,action:any){
  return _productReducer(state,action)
}