import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { products } from '../../_data/products';

import PaginationControl from '../pagination/PaginationControl';
import FilterControl from '../filter/FilterControl';
import ProductsTable from '../table/ProductsTable';

import './ProductsPage.css';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initializing pagination params
  const currentPage = useMemo(() => {
    return Number(searchParams.get('page')) || 1;
  }, [searchParams]);
  const itemsPerPage = useMemo(() => {
    return Number(searchParams.get('items_per_page')) || 20;
  }, [searchParams]);

  // Initializing filtering params
  const typeFilter = searchParams.get('type') || 'all';
  const statusFilter = searchParams.get('status') || 'all';
  const colorFilter = searchParams.get('color') || 'all';

  // Initializing sorting params
  const sortName = searchParams.get('sort_name') || 'all';
  const sortPrice = searchParams.get('sort_price') || 'all';

  // Compute the filtered/sorted results
  const filteredResults = useMemo(() => {
    let results = [...products];

    if (typeFilter !== 'all') {
      results = results.filter(
        (product) => product.type.toLowerCase() === typeFilter.toLowerCase()
      );
    }

    if (statusFilter !== 'all') {
      results = results.filter(
        (product) =>
          product.status.toLowerCase() ===
          statusFilter.replaceAll('_', ' ').toLowerCase()
      );
    }

    if (colorFilter !== 'all') {
      results = results.filter(
        (product) => product.color.toLowerCase() === colorFilter.toLowerCase()
      );
    }

    // Apply sorting
    if (sortName === 'from_a_to_z') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === 'from_z_to_a') {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortPrice === 'from_cheap_to_expensive') {
      results.sort(
        (a, b) => Number(a.price_per_quantity) - Number(b.price_per_quantity)
      );
    } else if (sortPrice === 'from_expensive_to_cheap') {
      results.sort(
        (a, b) => Number(b.price_per_quantity) - Number(a.price_per_quantity)
      );
    }

    return results;
  }, [typeFilter, statusFilter, colorFilter, sortName, sortPrice]);

  // Compute the paginated results based on the default/global results or based on filtering/sorting
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredResults.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, filteredResults]);

  return (
    <div className='products-page'>
      <div className='products-page-panel'>
        <PaginationControl
          products={filteredResults}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onSearchParams={setSearchParams}
        />

        <div className='horizontal-line' />

        <FilterControl
          typeFilter={typeFilter}
          statusFilter={statusFilter}
          colorFilter={colorFilter}
          sortName={sortName}
          sortPrice={sortPrice}
          itemsPerPage={itemsPerPage}
          onSearchParams={setSearchParams}
        />
      </div>

      <ProductsTable products={paginatedProducts} />
    </div>
  );
}
