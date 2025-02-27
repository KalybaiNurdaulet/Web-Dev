import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories(): Observable<Category[]> {
    // Simulate an API call using 'of'
    return of(CATEGORIES);
  }
}