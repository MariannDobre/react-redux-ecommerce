import { useCallback } from 'react';
import type { ChangeEvent } from 'react';
import type { SetURLSearchParams } from 'react-router-dom';

import { LuSearch } from 'react-icons/lu';

import './SearchInput.css';

interface SearchInputProps {
  searchQuery: string;
  onSearchParams: SetURLSearchParams;
}

export default function SearchInput({
  searchQuery,
  onSearchParams,
}: SearchInputProps) {
  const isQueryEmpty = searchQuery.trim() === '';

  const updateQuery = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      onSearchParams(
        (prevParams) => {
          const params = new URLSearchParams(prevParams);

          if (value.trim() === '') {
            params.delete('search_query');
            params.delete('results_page');
          } else {
            params.set('search_query', value);
          }

          return params;
        },
        { replace: true }
      );
    },
    [onSearchParams]
  );

  const clearQuery = useCallback(() => {
    onSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.delete('search_query');
      params.delete('results_page');

      return params;
    });
  }, [onSearchParams]);

  return (
    <div className='search-input-container'>
      <span className='search-icon'>
        <LuSearch />
      </span>

      <input
        type='text'
        id='search_product'
        name='search_product'
        placeholder='Search product'
        aria-label='Search product'
        value={searchQuery}
        onChange={updateQuery}
        className='search-input'
      />

      <button
        type='button'
        onClick={clearQuery}
        disabled={isQueryEmpty}
        className='clear-search-input-btn'
      >
        Clear
      </button>
    </div>
  );
}
