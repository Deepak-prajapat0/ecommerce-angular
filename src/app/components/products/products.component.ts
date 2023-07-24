import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  product:any[]= []

  async ngOnInit(){
    let url = 'https://dummyjson.com/products';
   await fetch(url).then(async res=>{
      let product = await res.json()
      this.product = product.products
    })
   console.log(this.product)
  }

}
