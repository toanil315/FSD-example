import { Controller, useFormContext } from 'react-hook-form';
import Search, { SearchProps } from '../Commons/Search/Search';

const RHFSearch = (props: Omit<SearchProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Search
          error={fieldState.error}
          {...props}
          {...field}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFSearch;
