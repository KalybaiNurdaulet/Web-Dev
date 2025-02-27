export interface Product {
    id: number;
    categoryId: number;
    link: string;
    name: string;
    img: string[];
    price: number;
    description: string;
    rating: number;
    likes: number;
    currentImageIndex: number;
  }