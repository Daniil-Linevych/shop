'use client'
import { fakeApi } from '@/lib/api';
import { fakeApiEndpoints } from '@/lib/constants';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
        fakeApi.get(fakeApiEndpoints.init)
          .then(console.log)
    }, []);  

  return (
    <div className="page-container py-12 md:py-20">
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Welcome to Shop
        </h1>
        <p className="mx-auto mb-8 max-w-full text-lg text-gray-600 md:text-xl">
          A modern online shop application.
        </p>
        <Link
          href="/categories"
          className="inline-block rounded-lg bg-brand-blue px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          View categories
        </Link>
      </section>
    </div>
  );
}