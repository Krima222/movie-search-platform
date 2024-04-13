import { useSearchParams } from 'react-router-dom';
import { DateValue, YearPickerInput } from '@mantine/dates';

import calendar from './calendar.svg';

import classes from './index.module.scss';

export function Filter({
  placeholder,
  type,
  name,
}: {
  placeholder: string;
  type: 'text' | 'number';
  name: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (e.target.value !== '') {
      newSearchParams.set(name, e.target.value);
      // localStorage.setItem(name, e.target.value);
    } else {
      newSearchParams.delete(name);
      // localStorage.removeItem(name);
    }

    setSearchParams(newSearchParams);
  };

  const handleInputChangeYear = (value: DateValue) => {
    const newSearchParams = new URLSearchParams(searchParams);

    const currentlySelectedDate = value?.getFullYear().toString();

    if (value !== null && currentlySelectedDate) {
      newSearchParams.set(name, currentlySelectedDate);
      // localStorage.setItem(name, currentlySelectedDate);
    } else {
      newSearchParams.delete(name);
      // localStorage.removeItem(name);
    }

    setSearchParams(newSearchParams);
  };

  const currentDate = searchParams.get(name)
    ? new Date(searchParams.get(name) ?? '')
    : new Date();

  // const storedValue = localStorage.getItem(name)
  //   ? localStorage.getItem(name)?.toString()
  //   : '';

  return (
    <>
      {name === 'year' ? (
        <div className={classes.wrapper}>
          <YearPickerInput
            placeholder="year"
            defaultValue={new Date()}
            value={currentDate}
            onChange={handleInputChangeYear}
            minDate={new Date(1874, 1)}
            maxDate={new Date(2024, 1)}
            variant="unstyled"
            leftSection={
              <img className={classes.img} src={calendar} alt="Calendar" />
            }
            classNames={{
              input: classes.year,
            }}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={searchParams.get(name) ?? ''}
          onChange={handleInputChange}
          className={classes.container}
        />
      )}
    </>
  );
}
