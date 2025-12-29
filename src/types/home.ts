export interface IBanner {
  image: string;
  title: string;
}

export interface IBannerProps extends IBanner {
  className?: string;
}

export interface IBrand {
  id: number;
  name: string;
  imageUrl: string;
}

export interface IBrandCardProps {
  brand: string;
  image: string;
}
