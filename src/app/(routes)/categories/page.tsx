'use client';
import { useEffect } from 'react';
import { fakeApiEndpoints } from '@/lib/constants';
import { fakeApi } from '@/lib/api';

export default function CategoriesPage() {
  useEffect(() => {
    fakeApi.get(fakeApiEndpoints.category).then(console.log);
  }, []);

  return (
    <div className="page-container py-12 md:py-20">
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Categories
        </h1>
        <p className="mx-auto mb-8 max-w-full text-lg text-gray-600 md:text-xl">
          Here you can see categories of our products
        </p>
      </section>
    </div>
  );
}
