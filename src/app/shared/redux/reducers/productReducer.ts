import { createReducer, on } from '@ngrx/store';
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';
import { initialState } from '../state/productState';
import { loadProduct, loadProductSuccess } from '../actions/productAction';

// const _productReducers = createReducer(initialState);

// export function productReducers(state:any,action:any){
//   return _productReducers(state,action)
// }

export const productReducers = createReducer(initialState,
  on(loadProduct,(state)=>(
    {...state}
  )),
  on(loadProductSuccess,(state)=>(
    {...state}
  ))
  )
