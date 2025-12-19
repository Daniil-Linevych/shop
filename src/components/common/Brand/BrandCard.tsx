import React from 'react';
import { BrandCardProps } from '@/types/home';

const BrandCard: React.FC<BrandCardProps> = ({ brand, image }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={brand}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="relative w-full p-6">
          <div className="inline-block -skew-x-12 transform bg-blue-600/90 px-6 py-3 text-white">
            <span className="inline-block skew-x-12 transform text-2xl font-bold tracking-wider uppercase">
              {brand}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
