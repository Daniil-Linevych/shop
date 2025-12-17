import React from "react";
import ReactStars from "react-stars";
import {ProductCarouselCardProps} from '@/types/product'

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({ product, showDiscount = false }) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0 w-64">
      <div className="relative">
        {showDiscount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
            HOT!
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
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
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.details}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            {product.oldPrice}$
          </span>
          <span className="text-red-500 font-bold text-xl">
            {product.price}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselCard;