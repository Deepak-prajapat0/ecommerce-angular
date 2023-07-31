import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product } from "../models/productModel";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url: string = 'https://dummyjson.com/products';


  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + '?limit=100')
  }

  getProducts() {
    return this.http.get(this.url)
  }

  getSingleProduct(id:string):Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id);
  }
}