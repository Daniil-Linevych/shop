import React from 'react';
import { ProductCardProps } from '@/types/product';
import ReactStars from 'react-stars';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  showDiscount = false,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
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
          />
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {product.details.manufacturer + product.details.ram + product.details.processor}
        </p>

        <div className="mb-3 flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-xl font-bold text-red-500">
            ${product.price}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full rounded bg-blue-900 py-2 font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
