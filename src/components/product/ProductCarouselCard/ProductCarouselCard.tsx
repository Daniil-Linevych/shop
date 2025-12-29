import React from 'react';
import ReactStars from 'react-stars';
import { ProductCarouselCardProps } from '@/types/product';

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({
  product,
  showDiscount = false,
}) => {
  return (
    <div className="w-64 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
      <div className="relative">
        {showDiscount && (
          <div className="absolute top-2 right-2 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
            HOT!
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>

        <div className="mb-3 flex items-center gap-1">
          <ReactStars
            count={5}
            value={product.rating}
            size={16}
            color2={'#fbbf24'}
            color1={'#d1d5db'}
            edit={false}
            half={false}
          />
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {product.details}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            {product.oldPrice}$
          </span>
          <span className="text-xl font-bold text-red-500">
            {product.price}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselCard;
