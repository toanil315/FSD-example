import React from 'react';
import { Select } from '../Select';
import { StyledSearch } from './styled';
import { Input } from '../Input';
import { SearchIcon } from '../../Icons';

export interface SearchProps {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: { message?: string };
  name: string;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
  value?: string | string[];
  placeholder?: string;
}

const Search = ({ multiple, onChange, ...restProps }: SearchProps) => {
  const handleChange = (value: string | string[]) => {
    onChange && onChange(value);
  };

  if (multiple) {
    return (
      <StyledSearch multiple={multiple}>
        <Select
          dropdownStyle={{ display: 'none' }}
          mode={'tags'}
          suffixIcon={<SearchIcon />}
          onChange={handleChange}
          {...restProps}
        />
      </StyledSearch>
    );
  }

  return (
    <StyledSearch>
      <Input
        onChange={handleChange as any}
        prefix={(<SearchIcon />) as any}
        suffixPosition='left'
        {...restProps}
      />
    </StyledSearch>
  );
};

export default Search;
