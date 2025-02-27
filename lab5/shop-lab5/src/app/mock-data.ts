import { Category } from './category';
import { Product } from './product';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Keyboards' },
  { id: 4, name: 'Audio' }
];

export const PRODUCTS: Product[] = [
  // Smartphones (Category 1)
  { id: 1, categoryId: 1, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', name: 'Смартфон Apple iPhone 13 128Gb черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'], price: 271000, description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR,...', rating: 4, likes: 0, currentImageIndex: 0 },
  { id: 2, categoryId: 1, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000', name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ сиреневый', img: ['https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-medium'], price: 192490, description: '...', rating: 4.5, likes: 0, currentImageIndex: 0 },
  { id: 5, categoryId: 1, link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000', name: 'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/256 ГБ черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium'], price: 274000, description: '...', rating: 4.8, likes: 0, currentImageIndex: 0 },

  // Laptops (Category 2)
  { id: 6, categoryId: 2, link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000', name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2', img: ['https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium'], price: 538000, description: '...', rating: 4.2, likes: 0, currentImageIndex: 0 },
  { id: 7, categoryId: 2, link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000', name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63', img: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium'], price: 410000, description: '...', rating: 4.7, likes: 0, currentImageIndex: 0 },
  
  // Keyboards (Category 3)
  { id: 11, categoryId: 3, link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000', name: 'Клавиатура AULA F75 белый', img: ['https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium'], price: 20000, description: '...', rating: 4.0, likes: 0, currentImageIndex: 0 },
  { id: 12, categoryId: 3, link: 'https://kaspi.kz/shop/p/x-game-xk-100ub-chernyi-9200019/?c=750000000', name: 'Клавиатура X-Game XK-100UB черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=gallery-medium'], price: 1679, description: '...', rating: 4.3, likes: 0, currentImageIndex: 0 },
  { id: 13, categoryId: 3, link: 'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000', name: 'Клавиатура X-Game XK-200UB черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/p10/p50/24821936.jpg?format=gallery-medium'], price: 2500, description: '...', rating: 4.6, likes: 0, currentImageIndex: 0 },
  // Audio (Category 4)
  { id: 16, categoryId: 4, link: 'https://kaspi.kz/shop/p/cat-ear-wireless-headphones-p33m-chernyi-101702745/?c=750000000', name: 'Наушники CAT EAR Wireless Headphones P33M черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/h2e/h55/64055711203358.jpg?format=gallery-medium'], price: 2800, description: '...', rating: 4.4, likes: 0, currentImageIndex: 0 },
  { id: 17, categoryId: 4, link: 'https://kaspi.kz/shop/p/xiaomi-in-ear-headphones-basic-chernyi-4803686/?c=750000000', name: 'Наушники Xiaomi In-Ear Headphones Basic черный', img: ['https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/7469533.jpg?format=gallery-medium'], price: 2700, description: '...', rating: 4.6, likes: 0, currentImageIndex: 0 },
  { id: 18, categoryId: 4, link: 'https://kaspi.kz/shop/p/macaron-headphones-rozovyi-128635264/?c=750000000', name: 'Hаушники Macaron Headphones розовый', img: ['https://resources.cdn-kaspi.kz/img/m/p/p9f/p35/3575527.png?format=gallery-medium'], price: 3450, description: '...', rating: 4.7, likes: 0, currentImageIndex: 0 },
  ];