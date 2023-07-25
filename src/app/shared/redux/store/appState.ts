
import {productReducers } from "../reducers/productReducer";
import { ProductState } from "../state/productState";


export interface Appstate{
    product:ProductState
}

export const appReducer = {
  product: productReducers,
};