import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to products
  { path: 'products', component: ProductListComponent },  // Show all products (or a default category)
  { path: 'category/:categoryId', component: ProductListComponent }, // Show products by category
];