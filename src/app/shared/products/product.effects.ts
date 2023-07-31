import { loadSingleProduct, loadSingleProductSuccess } from 'src/app/shared/products/productAction';
import { Injectable, effect } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import {
  loadAllProduct,
  loadAllProductSuccess,
  loadProduct,
  loadProductSuccess,
  
} from './productAction';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

    loadAllProduct = createEffect(()=>{
    return  this.actions$.pipe(
      ofType(loadAllProduct),
      exhaustMap(()=>{
        return this.productService.getAllProducts().pipe(
          map((data)=>{
            return loadAllProductSuccess({products:data})
          })
        )
      })
    )
})
  

  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProduct),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((data:any) => {
            return loadProductSuccess({ products: data});
          })
        )
      )
    );
  });


   loadSingleProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSingleProduct),
      switchMap((action:any) =>
        this.productService.getSingleProduct(action.id).pipe(
          map((product:any) =>
            loadSingleProductSuccess({
              product: product
            })
          )
        )
      )
    );
  });
}
