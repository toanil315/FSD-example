import { Input, SearchIcon } from '@/shared/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const getInitialSearch = () => {
  const search = new URLSearchParams(window.location.search).get('search');
  return search || '';
};

export const SearchBlog = () => {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState(getInitialSearch());
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchBlog = (e: React.FormEvent) => {
    e.preventDefault();
    searchParams.delete('search');
    searchParams.delete('order');
    searchParams.delete('page');
    if (search) {
      searchParams.append('search', search);
      searchParams.append('page', '1');
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSearchBlog}>
      <Input
        className='min-w-[300px] md:flex-0 !py-3 !shadow-none'
        name='search'
        placeholder={t('search')}
        inputSize='medium'
        onChange={(value) => setSearch(value as string)}
        value={search}
        suffix={<SearchIcon />}
      />
    </form>
  );
};
