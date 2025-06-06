import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const Products = lazy(() => import('products/Products'));

import './index.css';

const App = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow p-4">
      <h1 className="text-3xl font-bold">MF Store</h1>
    </header>

    <main className="p-6 grid grid-cols-2 gap-8">
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <Suspense fallback={<div>Loading Products...</div>}>
          <Products />
        </Suspense>
      </section>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl mb-4">Your Cart</h2>
      </section>
    </main>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
