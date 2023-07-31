import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/productModel';

export const LOAD_PRODUCT = '[product page] load products';
export const LOAD_PRODUCT_SUCCESS = '[product page] load product success';

export const loadProduct = createAction(LOAD_PRODUCT);
export const loadProductSuccess = createAction(
  LOAD_PRODUCT_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadAllProduct = createAction(LOAD_PRODUCT);
export const loadAllProductSuccess = createAction(
  LOAD_PRODUCT_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadSingleProduct = createAction(
  'PRODUCT_REQUEST',
  props<{ id: number }>()
);
export const loadSingleProductSuccess = createAction("PRODUCT_SUCCESS",props<{product:Product}>())
