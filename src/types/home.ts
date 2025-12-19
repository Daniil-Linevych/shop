export interface Banner {
  image: string;
  title: string;
}

export interface BannerProps extends Banner {
  className?: string;
}

export interface Brand {
  id: number;
  name: string;
  imageUrl: string;
}

export interface BrandCardProps {
  brand: string;
  image: string;
}
