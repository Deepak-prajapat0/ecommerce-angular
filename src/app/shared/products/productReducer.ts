import { createReducer, on } from '@ngrx/store';
// import { initialState } from './productState';
import { loadProduct,  loadProductSuccess } from './productAction';
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
);
