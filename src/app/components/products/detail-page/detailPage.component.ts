import { Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import {
  loadAllProduct,
  loadSingleProduct,
} from 'src/app/shared/products/productAction';
import { AppState } from 'src/app/shared/redux/store';

@Component({
  selector: 'detail-page',
  templateUrl: './detailPage.component.html',
  styleUrls: ['./detailPage.component.css'],
})
@HostListener('unloaded')
export class DetailPageComponent {

  product!: Product;
  id!: number;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    let paramId = this.router.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId
      this.store.dispatch(loadSingleProduct({ id: +paramId }));
      this.store
        .select((state) => state.product)
        .subscribe((product) => {
          this.product = product.product;
          console.log(this.product);
        });
    }
  }

}
