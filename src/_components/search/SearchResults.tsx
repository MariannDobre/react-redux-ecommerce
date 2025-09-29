import { useMemo } from 'react';

import { Link } from 'react-router-dom';
import type { SetURLSearchParams } from 'react-router-dom';

import { products } from '../../_data/products';

import './SearchResults.css';

interface SearchResultsProps {
  searchQuery: string;
  currentPage: number;
  onSearchParams: SetURLSearchParams;
}

export default function SearchResults({
  searchQuery,
  currentPage,
  onSearchParams,
}: SearchResultsProps) {
  const results = products;

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    return results
      .filter((product) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [results, searchQuery]);

  const resultsPerPage = 5;
  const totalPages = Math.ceil(filteredResults?.length / resultsPerPage);

  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    return filteredResults.slice(startIndex, endIndex);
  }, [currentPage, filteredResults]);

  return (
    <div className='search-results-wrapper'>
      {paginatedResults?.length > 0 ? (
        <div className='search-results-container'>
          <p className='results-count'>
            Total results for <strong>{searchQuery}</strong>&nbsp;is&nbsp;
            <strong>{filteredResults?.length}</strong>
          </p>

          {paginatedResults.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.name}`}
              className='results-link'
            >
              <strong className='results-link-id'>{product.id}</strong>

              <h3 className='results-link-name'>{product.name}</h3>

              <p className='results-link-type'>({product.type})</p>
            </Link>
          ))}

          <div className='results-pagination-wrapper'>
            <p className='results-pagination-index'>
              Page <strong>{currentPage}</strong>&nbsp;/&nbsp;
              <strong>{totalPages}</strong>
            </p>

            <div className='results-pagination-control-panel'>
              <button
                type='button'
                onClick={() =>
                  onSearchParams((prevParams) => {
                    const params = new URLSearchParams(prevParams);

                    params.set('results_page', String(currentPage - 1));
                    return params;
                  })
                }
                disabled={currentPage === 1}
                className='results-pagination-prev-page-button'
              >
                Prev Page
              </button>

              <button
                type='button'
                onClick={() =>
                  onSearchParams((prevParams) => {
                    const params = new URLSearchParams(prevParams);

                    params.set('results_page', String(currentPage + 1));
                    return params;
                  })
                }
                disabled={currentPage === totalPages}
                className='results-pagination-next-page-button'
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className='no-results-msg'>
          There were 0 results for the provided query:&nbsp;
          <strong>{searchQuery}</strong>
        </p>
      )}
    </div>
  );
}
