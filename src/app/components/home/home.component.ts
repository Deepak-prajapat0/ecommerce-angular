import { Appstate } from './../../shared/redux/store/appState';
import { Component } from '@angular/core';
import { Action,Store,createReducer,on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productModel';
import { loadProduct } from 'src/app/shared/redux/actions/productAction';
import { selectProduct } from 'src/app/shared/redux/selectors/product.selector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// const { cart, loading } = useSelector((state) => state.cart);
export class HomeComponent {
  product$ = this.store.select(selectProduct);

  constructor(private store: Store) {}

  ngOnInit():void{
      this.store.dispatch(loadProduct())
      console.log(this.product$)
  }
}
