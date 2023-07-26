import { Injectable, effect } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import { loadProduct, loadProductSuccess } from './productAction';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
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


}
