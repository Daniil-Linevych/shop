export interface IProduct {
  key: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  details: string;
  url: string;
  imageUrl: string;
  discount: boolean;
}

export interface IProductCardProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
  showDiscount?: boolean;
}

export interface ProductCarouselCardProps {
  product: IProduct;
  showDiscount?: boolean;
}

export interface ProductListProps {
  products: IProduct[];
  onAddToCart: (product: IProduct) => void;
}

export interface ProductCarouselProps {
  products: IProduct[];
}
