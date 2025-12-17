import React from "react";
import {BannerProps} from '@/types/home'

const Banner: React.FC<BannerProps> = ({ image, title, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group ${className}`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Banner