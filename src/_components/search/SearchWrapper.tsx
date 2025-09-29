import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

import './SearchWrapper.css';

export default function SearchWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = useMemo(() => {
    return searchParams.get('search_query') || '';
  }, [searchParams]);

  const currentPage = useMemo(() => {
    return Number(searchParams.get('results_page')) || 1;
  }, [searchParams]);

  return (
    <div className='search-wrapper'>
      <SearchInput
        searchQuery={searchQuery}
        onSearchParams={setSearchParams}
      />

      {searchQuery.trim() !== '' && (
        <SearchResults
          searchQuery={searchQuery}
          currentPage={currentPage}
          onSearchParams={setSearchParams}
        />
      )}
    </div>
  );
}
