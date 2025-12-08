import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-container py-12 md:py-20">
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Shop
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-full text-lg text-gray-600 md:text-xl">
          A modern online shop application.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg"
        >
          View Products
        </Link>
      </section>
    </div>
  );
}