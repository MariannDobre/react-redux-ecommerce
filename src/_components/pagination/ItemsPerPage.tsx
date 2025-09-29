import { memo, useCallback } from 'react';

import type { Product } from '../../src/_data/products';
import type { SetURLSearchParams } from 'react-router-dom';

import './ItemsPerPage.css';

interface ComponentProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function ItemsPerPage({
  products,
  currentPage,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  const totalProducts = products ? products.length : 0;

  // Compute the total visible items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
  const visibleItemsOnPage = endIndex - startIndex;

  const handleItemsPerPage = useCallback(
    (quantity: number) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        params.set('items_per_page', String(quantity));
        params.set('page', '1');
        return params;
      });
    },
    [onSearchParams]
  );

  const set20 = useCallback(() => handleItemsPerPage(20), [handleItemsPerPage]);
  const set50 = useCallback(() => handleItemsPerPage(50), [handleItemsPerPage]);
  const set100 = useCallback(
    () => handleItemsPerPage(100),
    [handleItemsPerPage]
  );

  return (
    <div className='items-per-page-container'>
      <p className='items-per-page-count'>
        Current visible items on this page page:&nbsp;
        <strong>{visibleItemsOnPage}</strong>&nbsp;of&nbsp;
        <strong>{totalProducts}</strong>
      </p>

      <div className='items-per-page-control-panel'>
        <button
          onClick={set20}
          disabled={itemsPerPage === 20}
          className={
            itemsPerPage === 20
              ? 'items-per-page-button-active'
              : 'items-per-page-button'
          }
        >
          20
        </button>

        <button
          onClick={set50}
          disabled={itemsPerPage === 50}
          className={
            itemsPerPage === 50
              ? 'items-per-page-button-active'
              : 'items-per-page-button'
          }
        >
          50
        </button>

        <button
          onClick={set100}
          disabled={itemsPerPage === 100}
          className={
            itemsPerPage === 100
              ? 'items-per-page-button-active'
              : 'items-per-page-button'
          }
        >
          100
        </button>
      </div>
    </div>
  );
}

export default memo(ItemsPerPage);
