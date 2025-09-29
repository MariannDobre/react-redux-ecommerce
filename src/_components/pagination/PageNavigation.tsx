import { memo, useCallback } from 'react';

import type { Product } from '../../src/_data/products';
import type { SetURLSearchParams } from 'react-router-dom';

import './PageNavigation.css';

interface ComponentProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function PageNavigation({
  products,
  currentPage,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  const totalProducts = products ? products.length : 0;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePrev = useCallback(() => {
    onSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set('page', String(currentPage - 1));
      params.set('items_per_page', String(itemsPerPage));
      return params;
    });
  }, [currentPage, itemsPerPage, onSearchParams]);

  const handleNext = useCallback(() => {
    onSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set('page', String(currentPage + 1));
      params.set('items_per_page', String(itemsPerPage));
      return params;
    });
  }, [currentPage, itemsPerPage, onSearchParams]);

  return (
    <div className='page-navigation-container'>
      <p className='page-navigation-count'>
        Page&nbsp;<strong>{currentPage}</strong>&nbsp;/&nbsp;{totalPages}
      </p>

      <div className='page-navigation-control-panel'>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className='prev-page-button'
        >
          Prev Page
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className='next-page-button'
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default memo(PageNavigation);
