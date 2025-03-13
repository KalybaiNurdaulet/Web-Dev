import { Component, OnInit } from '@angular/core';
import { Product, products } from '../product';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-products',
  standalone: true,          
  imports: [CommonModule],   
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = products;
  selectedImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  shareOnWhatsApp(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }

   // Method to go to the next image in the gallery
   nextImage(product: Product): void {
    product.currentImageIndex = (product.currentImageIndex + 1) % product.img.length;
  }

  // Method to go to the previous image in the gallery
  previousImage(product: Product): void {
    product.currentImageIndex = (product.currentImageIndex - 1 + product.img.length) % product.img.length;
  }
}