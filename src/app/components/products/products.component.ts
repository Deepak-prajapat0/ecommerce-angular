import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { getProducts } from 'src/app/shared/products/product.selector';
import { loadAllProduct } from 'src/app/shared/products/productAction';
import { AppState } from 'src/app/shared/redux/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // product$!: Observable<Product[]>;

  // products!: Product[];

  constructor(private router:Router, private store: Store<AppState>) {}

  // ngOnInit(): void {
  //   this.product$ = this.store.select(selectProduct).subscribe
  //   this.store.dispatch(loadAllProduct());
  //   // this.product$.subscribe((res: any) => {
  //   //   this.products = res.products;
  //   // });
  // }

  getDetail(id:number){
    this.router.navigateByUrl(`/product/${id}`)
  }
  products$!: Observable<Product[]>;
  products:Product[]=[]

  ngOnInit() {
    this.store.dispatch(loadAllProduct());
    this.store
      .select((state) => state.products)
      .subscribe((product) => {
        this.products = product.products;
      });
  }
}
