import React from 'react';
import { BannerProps } from '@/types/home';

const Banner: React.FC<BannerProps> = ({ image, title, className = '' }) => {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black">
        <h2 className="text-4xl font-bold tracking-wider text-white uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
