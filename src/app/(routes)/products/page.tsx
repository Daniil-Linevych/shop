'use client'

import React, { useState, useEffect } from 'react';
import FilterPanel from '@/components/filter/FilterPanel';
import ProductList from '@/components/product/ProductList/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Product } from '@/types/product';
import { Filters, SortBy } from '@/types/filters';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortBy>('rating');
  const [filters, setFilters] = useState<Filters>({
    manufacturers: [],
    processors: [],
    ram: [],
    priceRange: [0, 0],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://frontend-study.xenn.xyz/product');
        const data = await response.json();
        if (data.length > 0) {
          setProducts(data);
          setFilteredProducts(data);
        }
        else {
          setProducts([])
          setFilteredProducts([]);
        }
        
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.manufacturers.length > 0) {
      filtered = filtered.filter((product) =>
        filters.manufacturers.includes(product.details.manufacturer)
      );
    }

    if (filters.processors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.processors.includes(product.details.processor)
      );
    }

    if (filters.ram.length > 0) {
      filtered = filtered.filter((product) =>
        filters.ram.includes(product.details.ram)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'manufacturer':
          return a.details.manufacturer.localeCompare(b.details.manufacturer);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [filters, sortBy, products]);

  const handleFilterChange = (
    filterType: keyof Filters,
    value: string,
    checked: boolean
  ) => {
    setFilters((prev) => {
      const currentFilter = prev[filterType] as string[];
      return {
        ...prev,
        [filterType]: checked
          ? [...currentFilter, value]
          : currentFilter.filter((item) => item !== value),
      };
    });
  };

  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Notebooks</h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                    className="rounded-lg border bg-white px-4 py-2"
                  >
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="name">Name</option>
                  </select>
                  <button className="rounded-lg border px-3 py-2 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                </div>
              </div>
            </div>

            <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;