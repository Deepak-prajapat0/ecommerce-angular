import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { loadAllProduct, loadSingleProduct } from 'src/app/shared/products/productAction';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  product$: Observable<Product[]> = this.store.select(
    (state) => state.products
  );

  products!: Product[];

  constructor(private router:Router, private store: Store<{ products: Product[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllProduct());
    this.product$.subscribe((res: any) => {
      this.products = res.products;
    });
  }

  getDetail(id:number){
    this.router.navigateByUrl(`/product/${id}`)
  }
}
