import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url: string = 'https://dummyjson.com/products';

  getProducts() {
    return this.http.get(this.url);
  }

  getOneProduct(id:number) {
    return this.http.get(this.url+'/'+id);
  }
}