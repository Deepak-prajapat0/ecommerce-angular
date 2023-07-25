import { Product } from "src/app/models/productModel"

export interface ProductState{
    product:ReadonlyArray<Product>
}

 export const initialState : ProductState ={
    product:[]
}