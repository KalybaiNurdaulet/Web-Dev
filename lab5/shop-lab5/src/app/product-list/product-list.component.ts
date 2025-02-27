import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: number | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = +params['categoryId']; // Convert string to number
      this.selectedCategory = categoryId;
      this.loadProducts();
    });
  }

  loadProducts(): void {
    if (this.selectedCategory) {
      this.productService.getProductsByCategory(this.selectedCategory).subscribe(products => this.products = products);
    } else {
      this.productService.getProducts().subscribe(products => this.products = products);
    }
  }
}