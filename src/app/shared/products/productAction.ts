import { createAction, props } from '@ngrx/store';
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from './productConstants';
import { Product } from 'src/app/models/productModel';

export const loadProduct = createAction(PRODUCT_REQUEST)
export const loadProductSuccess = createAction(PRODUCT_SUCCESS,props<{products:readonly Product[]}>())

