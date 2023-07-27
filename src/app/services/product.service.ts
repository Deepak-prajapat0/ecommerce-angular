import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url: string = 'https://dummyjson.com/products';


  getAllProducts(){
    return this.http.get(this.url+'?limit=100')
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getSingleProduct(id:number) {
    return this.http.get(this.url+'/'+id);
  }
}