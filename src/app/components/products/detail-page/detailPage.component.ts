import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { loadAllProduct, loadSingleProduct } from 'src/app/shared/products/productAction';

@Component({
  selector: 'detail-page',
  templateUrl: './detailPage.component.html',
  styleUrls: ['./detailPage.component.css'],
})
export class DetailPageComponent {
  product$: Observable<Product> = this.store.select(
    (state) => state.products
  );

  products!: Product[];
  product!: Product;

  constructor(
    private router: ActivatedRoute,
    private store: Store<{ products: Product }>
  ) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.store.dispatch(loadSingleProduct(id));
    this.product$.subscribe((res: any) => {
      this.products = res.products;
    });

    // this.products.filter((x) => {
    //   if (x.id === Number(id)) {
    //     this.product = x;
    //     console.log(x);
    //   }
    // });
  }

  // product$: Observable<Product[]> = this.store.select(
  //   (state) => state.products
  // );

  // products!: Product[];

  // constructor(
  //   private router: Router,
  //   private store: Store<{ products: Product[] }>
  // ) {}

  // ngOnInit(): void {
  //   this.store.dispatch(loadAllProduct());
  //   this.product$.subscribe((res: any) => {
  //     this.products = res.products;
  //   });
  // }
}
