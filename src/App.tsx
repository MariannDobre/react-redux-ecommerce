import { Route, Routes } from 'react-router-dom';

import Layout from './_components/layout/Layout';
import HomePage from './_components/home/HomePage';
import ProductsPage from './_components/products/ProductsPage';
import ProductPage from './_components/products/ProductPage';
import CartPage from './_components/cart/CartPage';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path='products'
          element={<ProductsPage />}
        />

        <Route
          path='products/:id'
          element={<ProductPage />}
        />

        <Route
          path='cart'
          element={<CartPage />}
        />
      </Route>
    </Routes>
  );
}
