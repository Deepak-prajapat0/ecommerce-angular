import { createAction, props } from '@ngrx/store';
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from './productConstants';
import { Product } from 'src/app/models/productModel';

export const loadProduct = createAction(PRODUCT_REQUEST)
export const loadProductSuccess = createAction(PRODUCT_SUCCESS,props<{products:readonly Product[]}>())

export const loadAllProduct = createAction(PRODUCT_REQUEST)
export const loadAllProductSuccess = createAction(PRODUCT_SUCCESS,props<{products:readonly Product[]}>())

export const loadSingleProduct = createAction(PRODUCT_REQUEST)
export const loadSingleProductSuccess = createAction(PRODUCT_SUCCESS,props<{product:Product}>())

