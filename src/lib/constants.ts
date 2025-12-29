import { Product } from "@/types/product";

export const fakeApiOrigin = 'http://frontend-study.xenn.xyz';

export const fakeApiEndpoints = {
  init: `${fakeApiOrigin}/init`,
  login: `${fakeApiOrigin}/login`,
  logout: `${fakeApiOrigin}/logout`,
  home: `${fakeApiOrigin}/home`,
  category: `${fakeApiOrigin}/category`,
  catalog: `${fakeApiOrigin}/catalog`,
  cart: `${fakeApiOrigin}/cart`,
} as const;

export const VISIBLE_CAROUSEL_PRODUCTS_LENGTH = 5

export const products: Product[] = [
    {
      key: 1,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 2,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 3,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 4,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 5,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 6,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
  ];

  export const manufacturers = [
    'Apple',
    'Dell',
    'Asus',
    'HP',
    'Lenovo',
    'Microsoft',
    'Razer',
  ];

  export const processors = [
    'Intel Core i9',
    'Intel Core i10',
    'Intel Core i11',
    'Intel Core i8',
    'Intel Core i7',
    'AMD Ryzen 3',
    'AMD Ryzen 4',
    'AMD Ryzen 5',
    'AMD Ryzen 6',
  ];

  export const ramOptions = ['64 GB', '32 GB', '16 GB', '8 GB', '4 GB'];