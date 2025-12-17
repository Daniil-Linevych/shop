import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/product/ProductCard/ProductCard'; 
import {ProductListProps} from "@/types/product"

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const [currentPage, setCurrentPage] = useState<number>(2);
  const totalPages: number = 12;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            showDiscount={product.discount || false}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Previous page"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        
        <button 
          onClick={() => setCurrentPage(1)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${currentPage === 1 ? 'bg-blue-900 text-white' : ''}`}
        >
          1
        </button>
        <button 
          onClick={() => setCurrentPage(2)}
          className={`px-3 py-1 rounded ${currentPage === 2 ? 'bg-blue-900 text-white' : 'hover:bg-gray-100'}`}
        >
          2
        </button>
        <span className="px-2">...</span>
        <button 
          onClick={() => setCurrentPage(11)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${currentPage === 11 ? 'bg-blue-900 text-white' : ''}`}
        >
          11
        </button>
        <button 
          onClick={() => setCurrentPage(12)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${currentPage === 12 ? 'bg-blue-900 text-white' : ''}`}
        >
          12
        </button>
        
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Next page"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;