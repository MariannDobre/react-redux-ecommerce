import { Route, Routes } from 'react-router-dom';

import Layout from './_components/layout/Layout';
import HomePage from './_components/home/HomePage';
import ProductsPage from './_components/products/ProductsPage';
import IndividualProduct from './_components/products/IndividualProduct';

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
          path='products/:productName'
          element={<IndividualProduct />}
        />
      </Route>
    </Routes>
  );
}
