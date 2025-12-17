import React from "react";
import {BrandCardProps} from '@/types/home'

const BrandCard: React.FC<BrandCardProps> = ({ brand, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <img 
        src={image} 
        alt={brand}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="relative p-6 w-full">
          <div className="bg-blue-600/90 text-white px-6 py-3 inline-block transform -skew-x-12">
            <span className="text-2xl font-bold uppercase tracking-wider inline-block transform skew-x-12">
              {brand}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard