import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.categoryId === categoryId));
  }


  updateLikes(product: Product, newLikes: number): Observable<Product> {
    product.likes = newLikes;
    return of(product);
  }
}