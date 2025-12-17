import React from 'react'
import {CategoryItemProps} from '@/types/category'

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <span className="font-semibold text-gray-800">{title}</span>
    </div>
  );
};

export default CategoryItem