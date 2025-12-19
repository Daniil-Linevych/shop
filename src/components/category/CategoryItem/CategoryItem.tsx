import React from 'react';
import { CategoryItemProps } from '@/types/category';

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title }) => {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center">
        <img src={icon} alt={title} className="h-full w-full object-contain" />
      </div>
      <span className="font-semibold text-gray-800">{title}</span>
    </div>
  );
};

export default CategoryItem;
