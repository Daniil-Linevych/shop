'use client';
import React, { useEffect, useState } from 'react';
import { fakeApi } from '@/lib/api';
import { fakeApiEndpoints } from '@/lib/constants';
import Banner from '@/components/common/Banner/Banner';
import Carousel from '@/components/common/Carousel/Carousel';
import BrandCard from '@/components/common/Brand/BrandCard';
import CategoryItem from '@/components/category/CategoryItem/CategoryItem';
import { Category } from '@/types/category';
import { Brand } from '@/types/home';
import { Product } from '@/types/product';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const products: Product[] = [
    {
      key: 1,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 2,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 3,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 4,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 5,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
    {
      key: 6,
      name: 'ARTLINE Gaming X39',
      details:
        'Intel Core i5-10400F / RAM 16ТБ / SSD 240ТБ / GeForce GTX 1650 4ТБ',
      price: 1200,
      oldPrice: 1500,
      rating: 4,
      imageUrl: '/api_faker/images/products/placeholder.png',
      discount: false,
      url: '',
    },
  ];

  useEffect(() => {
    fakeApi.get(fakeApiEndpoints.init).then((data) => {
      setCategories(data.navigation);
      console.log(data);
    });
    fakeApi.get(fakeApiEndpoints.home).then((data) => {
      setBrands(data.featuredBrands);
      console.log(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => (
              <CategoryItem
                key={category.key}
                icon={category.imageUrl}
                title={category.title}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Banner
              image="http://localhost:3000/api_faker/images/collections/server_equipment.png"
              title="SERVER EQUIPMENT"
              className="h-96"
            />
            <div className="grid grid-rows-2 gap-6">
              <Banner
                image="http://localhost:3000/api_faker/images/collections/home_pc_stations.png"
                title=""
                className="h-44"
              />
              <Banner
                image="http://localhost:3000/api_faker/images/collections/laptops_netbooks.png"
                title=""
                className="h-44"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-blue-900">LOREM IPSUM</h2>
          <p className="mx-auto max-w-4xl leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-900">
            PRODUCTS YOU'LL PROBABLY LIKE
          </h2>
          <Carousel products={products} />
        </section>

        <section className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-900">
            FEATURED BRANDS
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand.name}
                image={brand.imageUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
