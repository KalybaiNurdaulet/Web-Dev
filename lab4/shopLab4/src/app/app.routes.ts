import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent


export const routes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' }, // Redirect root to /products
  { path: 'products', component: ProductsComponent },          // Route to ProductsComponent
];