import { Injectable, effect } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import { loadProduct, loadProductSuccess, loadSingleProduct } from './productAction';
import {  map, switchMap } from 'rxjs';
import { Product } from 'src/app/models/productModel';

@Injectable()
export class ProductEffects {
  constructor(
    private action: Actions,
    private productService: ProductService
  ) {}

  loadProduct$ = createEffect(() => {
    return this.action.pipe(
      ofType(loadProduct),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((product) =>
            loadProductSuccess({
              products: product as ReadonlyArray<Product>,
            })
          )
        )
      )
    );
  });

  loadAllProducts$ = createEffect(() => {
    return this.action.pipe(
      ofType(loadProduct),
      switchMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) =>
            loadProductSuccess({
              products: products as ReadonlyArray<Product>,
            })
          )
        )
      )
    );
  });

   loadSingleProduct$ = createEffect(() => {
    return this.action.pipe(
      ofType(loadSingleProduct),
      switchMap((action) =>
        this.productService.getSingleProduct(+action).pipe(
          map((products) =>
            loadProductSuccess({
              products: products as Product[],
            })
          )
        )
      )
    );
  });
}
