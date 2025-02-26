import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true, // Add this if AppComponent is also standalone
  imports: [ProductsComponent], // Import ProductsComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi-products';
}