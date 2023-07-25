import { createAction, props } from '@ngrx/store';
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from '../constants/productConstants';
import { Product } from 'src/app/models/productModel';

// export const getProduct = () => async (dispatch:any) => {
//   try {
//     dispatch({ type: PRODUCT_REQUEST });
//     let data = await fetch('https://dummyjson.com/products?limit=10');
//     data = await data.json();
//     dispatch({
//       type: PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_FAIL,
//       payload: error,
//     });
//   }
// };

export const loadProduct = createAction(PRODUCT_REQUEST)
export const loadProductSuccess = createAction(PRODUCT_SUCCESS,props<{products:Product[]}>())
