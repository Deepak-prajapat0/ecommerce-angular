import { createReducer, on } from '@ngrx/store';
// import { initialState } from './productState';
import { loadAllProduct, loadAllProductSuccess, loadProduct,  loadProductSuccess, loadSingleProduct, loadSingleProductSuccess } from './productAction';
import { Product } from 'src/app/models/productModel';


// const _productReducers = createReducer(initialState);

// export function productReducers(state:any,action:any){
//   return _productReducers(state,action)
// }

export interface ProductState {
  products: ReadonlyArray<Product>;
}

export const initialState: ProductState = {
  products: [],
};

export const productReducers = createReducer(
  initialState,
  on(loadProduct, (state) => ({ ...state })),
  on(loadProductSuccess, (state, { products }) => ({ ...state, ...products })),

  on(loadAllProduct, (state) => ({ ...state })),
  on(loadAllProductSuccess, (state, { products }) => ({ ...state, ...products })),

  on(loadSingleProduct, (state) => ({ ...state })),
  on(loadSingleProductSuccess, (state, { product }) => ({ ...state, ...product })),
);
