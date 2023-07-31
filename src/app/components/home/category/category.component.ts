import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
// import { loadProduct } from 'src/app/shared/products/productAction';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  category: any[] = [
    {
      name: 'Smartphones',
      url: 'smartphones',
      img: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    },
    {
      name: 'Laptops',
      url: 'laptops',
      img: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
    },
    {
      name: 'Skincare',
      url: 'skincare',
      img: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
    },
    {
      name: 'Groceries',
      url: 'groceries',
      img: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
    },
    {
      name: 'Home-Decor',
      url: 'home-decoration',
      img: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    },
    {
      name: 'Furniture',
      url: 'furniture',
      img: 'https://i.dummyjson.com/data/products/31/thumbnail.jpg',
    },
  ];
}
