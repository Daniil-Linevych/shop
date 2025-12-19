export interface Product {
  key: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  details: Details;
  url: string;
  imageUrl: string;
  discount: boolean;
}

export interface Details {
  manufacturer: string,
  ram: string
  processor: string
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  showDiscount?: boolean;
}

export interface ProductCarouselCardProps {
  product: Product;
  showDiscount?: boolean;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export interface ProductCarouselProps {
  products: Product[];
}
