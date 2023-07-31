import { productReducer, productsReducer } from './../products/productReducer';
import { ProductState, ProductsState } from "../products/product.state"


export interface AppState{
  products:ProductsState,
  product:ProductState
}

export const appReducer ={
  products:productsReducer,
  product:productReducer
}