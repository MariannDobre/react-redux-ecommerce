import { memo } from 'react';

import type { Product } from '../../src/_data/products';
import type { SetURLSearchParams } from 'react-router-dom';

import PageNavigation from './PageNavigation';
import ItemsPerPage from './ItemsPerPage';

import './PaginationControl.css';

interface ComponentProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function PaginationControl({
  products,
  currentPage,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  return (
    <div className='pagination-container'>
      <PageNavigation
        products={products}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onSearchParams={onSearchParams}
      />

      <ItemsPerPage
        products={products}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onSearchParams={onSearchParams}
      />
    </div>
  );
}

export default memo(PaginationControl);
