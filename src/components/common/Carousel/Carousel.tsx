import React, {useState} from 'react'
import { ProductCarouselProps } from '@/types/product';
import ProductCarouselCard from "@/components/product/ProductCarouselCard/ProductCarouselCard"

const Carousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 5 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev >= products.length - 5 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 -ml-4"
        aria-label="Previous products"
      >
        <i className="fas fa-chevron-left text-xl" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (256 + 24)}px)` }}
        >
          {products.map((product) => (
            <ProductCarouselCard key={product.key} product={product} showDiscount={product.discount} />
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 -mr-4"
        aria-label="Next products"
      >
        <i className="fas fa-chevron-right text-xl" />
      </button>
    </div>
  );
};

export default Carousel