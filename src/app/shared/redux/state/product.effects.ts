import { Injectable, effect } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { loadProduct, loadProductSuccess } from "../actions/productAction";
import { catchError, map, mergeMap, switchMap } from "rxjs";
import { Product } from "src/app/models/productModel";

@Injectable({
    providedIn:'root'
})

// export class ProductEffects{
//     constructor(private action$:Actions,private productService:ProductService){}
    
//     name$ = this.action$.pipe(ofType(loadProduct)).subscribe(res=>{
//         console.log(res)
//     })


//     // loadProduct$ = createEffect(
//     //     ()=>{
//     //         @effect()
//     //         return this.action$.pipe(ofType(loadProduct),mergeMap((action)=>{
//     //             return this.productService.getProducts().pipe(
//     //                 map((data)=>{
//     //                     console.log(data)
//     //                 })
//     //             )
//     //         }))
//     //     }
//     // )
// }


export class ProductEffects{

    constructor(private action$:Actions,private productService:ProductService){}

    loadProduct$ = createEffect(()=>{
        return this.action$.pipe(
          ofType(loadProduct),
          switchMap(() =>
            this.productService
              .getProducts()
              .pipe(
                map((product) =>
                  loadProductSuccess({
                    products: product as Product[],
                  })
                )
              )
          )
        );
    })


}