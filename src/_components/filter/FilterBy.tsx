import { memo, useCallback } from 'react';

import type { SetURLSearchParams } from 'react-router-dom';

import './FilterBy.css';

interface ComponentProps {
  typeFilter: string;
  statusFilter: string;
  colorFilter: string;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function FilterBy({
  typeFilter,
  statusFilter,
  colorFilter,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  const handleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (e.target.value) {
          params.set('type', e.target.value);
        } else {
          params.set('type', 'all');
        }

        params.set('page', '1');
        params.set('items_per_page', String(itemsPerPage));
        return params;
      });
    },
    [itemsPerPage, onSearchParams]
  );

  const handleStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (e.target.value) {
          params.set('status', e.target.value);
        } else {
          params.set('status', 'all');
        }

        params.set('page', '1');
        params.set('items_per_page', String(itemsPerPage));
        return params;
      });
    },
    [itemsPerPage, onSearchParams]
  );

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);

        if (e.target.value) {
          params.set('color', e.target.value);
        } else {
          params.set('color', 'all');
        }

        params.set('page', '1');
        params.set('items_per_page', String(itemsPerPage));
        return params;
      });
    },
    [itemsPerPage, onSearchParams]
  );

  return (
    <div className='filter-control-container'>
      <p className='filter-control-container-heading'>Filter</p>

      <div className='filter-control-panel'>
        <div className='filter-container'>
          <p className='filter-label'>Product Type</p>

          <select
            value={typeFilter}
            onChange={handleTypeChange}
            className='filter-box'
          >
            <option
              value='all'
              className='filter-option'
            >
              All
            </option>

            <option
              value='hat'
              className='filter-option'
            >
              Hat
            </option>

            <option
              value='sunglasses'
              className='filter-option'
            >
              Sunglasses
            </option>

            <option
              value='watch'
              className='filter-option'
            >
              Watch
            </option>

            <option
              value='jacket'
              className='filter-option'
            >
              Jacket
            </option>

            <option
              value='shirt'
              className='filter-option'
            >
              Shirt
            </option>

            <option
              value='pants'
              className='filter-option'
            >
              Pants
            </option>

            <option
              value='shoes'
              className='filter-option'
            >
              Shoes
            </option>
          </select>
        </div>

        <div className='filter-container'>
          <p className='filter-label'>Product Status</p>

          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className='filter-box'
          >
            <option
              value='all'
              className='filter-option'
            >
              All
            </option>

            <option
              value='in_stock'
              className='filter-option'
            >
              In Stock
            </option>

            <option
              value='on_the_way_to_stock'
              className='filter-option'
            >
              On the way to stock
            </option>

            <option
              value='not_in_stock'
              className='filter-option'
            >
              Not in stock
            </option>
          </select>
        </div>

        <div className='filter-container'>
          <p className='filter-label'>Product Color</p>

          <select
            value={colorFilter}
            onChange={handleColorChange}
            className='filter-box'
          >
            <option
              value='all'
              className='filter-option'
            >
              All
            </option>

            <option
              value='white'
              className='filter-option'
            >
              White
            </option>

            <option
              value='black'
              className='filter-option'
            >
              Black
            </option>

            <option
              value='red'
              className='filter-option'
            >
              Red
            </option>

            <option
              value='green'
              className='filter-option'
            >
              Green
            </option>

            <option
              value='blue'
              className='filter-option'
            >
              Blue
            </option>

            <option
              value='yellow'
              className='filter-option'
            >
              Yellow
            </option>

            <option
              value='gray'
              className='filter-option'
            >
              Gray
            </option>

            <option
              value='brown'
              className='filter-option'
            >
              Brown
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default memo(FilterBy);
