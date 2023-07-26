// import { Appstate } from './../../shared/redux/store/appState';
import { Component } from '@angular/core';
import { Action,Store,createReducer,on, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { loadProduct } from 'src/app/shared/products/productAction';
import { selectProduct } from 'src/app/shared/products/product.selector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  product$: Observable<Product[]> = this.store.select((state) => state.products);
  product!:Product[]

  constructor(private store: Store<{ products: Product[] }>) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
    this.product$.subscribe((res:any)=>{
      this.product = res.products
    })
  }
}
