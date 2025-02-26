import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent
// Import any other components you want to route to

export const routes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' }, // Redirect root to /products
  { path: 'products', component: ProductsComponent },          // Route to ProductsComponent
  // Add more routes as needed, e.g.,
  // { path: 'home', component: HomeComponent }
];