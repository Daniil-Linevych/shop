export interface Product {
    key:number
    name: string
    price: number
    oldPrice: number
    rating: number
    details: string
    url: string
    imageUrl: string
    discount: boolean 
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