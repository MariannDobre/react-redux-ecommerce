import { memo } from 'react';

import type { SetURLSearchParams } from 'react-router-dom';

import FilterBy from './FilterBy';
import SortBy from './SortBy';

import './FilterControl.css';

interface ComponentProps {
  typeFilter: string;
  statusFilter: string;
  colorFilter: string;
  sortName: string;
  sortPrice: string;
  itemsPerPage: number;
  onSearchParams: SetURLSearchParams;
}

function FilterControl({
  typeFilter,
  statusFilter,
  colorFilter,
  sortName,
  sortPrice,
  itemsPerPage,
  onSearchParams,
}: ComponentProps) {
  return (
    <div className='filter-control-section'>
      <FilterBy
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        colorFilter={colorFilter}
        itemsPerPage={itemsPerPage}
        onSearchParams={onSearchParams}
      />

      <div className='horizontal-line' />

      <SortBy
        sortName={sortName}
        sortPrice={sortPrice}
        itemsPerPage={itemsPerPage}
        onSearchParams={onSearchParams}
      />
    </div>
  );
}

export default memo(FilterControl);
