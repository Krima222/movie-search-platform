import { useSearchParams } from 'react-router-dom';

import { Select } from '@mantine/core';

import classes from './index.module.scss';

export function AgeRatingSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChangeYear = (value: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value !== null) {
      newSearchParams.set('ageRating', value);

      localStorage.setItem('ageRating', value);
    } else {
      newSearchParams.delete('ageRating');
      localStorage.removeItem('ageRating');
    }

    setSearchParams(newSearchParams);
  };

  const storedValue = localStorage.getItem('ageRating')
    ? localStorage.getItem('ageRating')?.toString()
    : '';

  return (
    <div>
      <Select
        placeholder="Возрастной рейтинг фильмов"
        data={['6', '12', '16', '18']}
        onChange={handleInputChangeYear}
        value={storedValue}
        classNames={{
          input: classes.select,
          dropdown: classes.select,
          option: classes.option,
        }}
      />
    </div>
  );
}
