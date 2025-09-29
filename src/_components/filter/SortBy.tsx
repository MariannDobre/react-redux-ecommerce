import { memo, useCallback } from 'react';

import type { SetURLSearchParams } from 'react-router-dom';

import './SortBy.css';

interface ComponentProps {
  sortName: string;
  sortPrice: string;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function SortBy({
  sortName,
  sortPrice,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (e.target.value) {
          params.set('sort_name', e.target.value);
        } else {
          params.set('sort_name', 'all');
        }

        params.set('page', '1');
        params.set('items_per_page', String(itemsPerPage));
        return params;
      });
    },
    [itemsPerPage, onSearchParams]
  );

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (e.target.value) {
          params.set('sort_price', e.target.value);
        } else {
          params.set('sort_price', 'all');
        }

        params.set('page', '1');
        params.set('items_per_page', String(itemsPerPage));
        return params;
      });
    },
    [itemsPerPage, onSearchParams]
  );

  return (
    <div className='sorting-control-container'>
      <p className='sorting-control-container-heading'>Sorting</p>

      <div className='sorting-control-panel'>
        <div className='sorting-container'>
          <p className='sorting-label'>By Product Name</p>

          <select
            value={sortName}
            onChange={handleNameChange}
            className='sorting-box'
          >
            <option
              value='all'
              className='sorting-option'
            >
              All
            </option>

            <option
              value='from_a_to_z'
              className='sorting-option'
            >
              From A to Z
            </option>

            <option
              value='from_z_to_a'
              className='sorting-option'
            >
              From Z to A
            </option>
          </select>
        </div>

        <div className='sorting-container'>
          <p className='sorting-label'>By Product Price</p>

          <select
            value={sortPrice}
            onChange={handlePriceChange}
            className='sorting-box'
          >
            <option
              value='all'
              className='sorting-option'
            >
              All
            </option>

            <option
              value='from_cheap_to_expensive'
              className='sorting-option'
            >
              From Cheap to Expensive
            </option>

            <option
              value='from_expensive_to_cheap'
              className='sorting-option'
            >
              From Expensive to Cheap
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default memo(SortBy);
