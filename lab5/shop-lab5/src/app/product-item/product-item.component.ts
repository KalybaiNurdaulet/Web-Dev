import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | null = null;

  constructor(private productService: ProductService) {}

  likeProduct(): void {
    if (this.product) {
      const newLikes = this.product.likes + 1;
      this.productService.updateLikes(this.product, newLikes).subscribe(updatedProduct => {
        this.product!.likes = updatedProduct.likes;
      });
    }
  }

  // Image navigation functions
  previousImage(): void {
    if (this.product) {
      this.product.currentImageIndex = (this.product.currentImageIndex - 1 + this.product.img.length) % this.product.img.length;
    }
  }

  nextImage(): void {
    if (this.product) {
      this.product.currentImageIndex = (this.product.currentImageIndex + 1) % this.product.img.length;
    }
  }
}