import { Product } from "src/app/models/productModel"

export interface ProductsState{
    products:Product[]
}
export interface ProductState{
    product:Product
}

export const initialProductsState ={
    products:[],
}
export const initialProductState ={
    product:{}
}