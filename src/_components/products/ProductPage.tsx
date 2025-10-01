import { useParams } from 'react-router-dom';
import { products } from '../../_data/products';

import PageBanner from './PageBanner';
import ProductImage from './product/ProductImage';
import ProductDetails from './product/ProductDetails';

import './ProductPage.css';

export default function ProductPage() {
  // Temporarily because no backend
  const { id } = useParams();

  const currentProduct = products.find((product) => product.id === Number(id));

  return (
    <div className='product-page-container'>
      <PageBanner />

      <div className='product-page-layout'>
        <ProductImage productType={currentProduct?.type} />

        <ProductDetails currentProduct={currentProduct} />
      </div>
    </div>
  );
}
