import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { loadProduct } from 'src/app/shared/products/productAction';
// import { loadProduct } from 'src/app/shared/products/productAction';

@Component({
  selector: 'bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls:['./bestselling.component.css']
})
export class BestsellingComponent {
  product$: Observable<Product[]> = this.store.select(
    (state) => state.products
  );

  products!: Product[];

  constructor(private store: Store<{ products: Product[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
    this.product$.subscribe((res: any) => {
      this.products = res.products;
    });
  }
}
