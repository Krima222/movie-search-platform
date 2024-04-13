import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { useSearchMovie } from '../../hooks/useSearchMovie';

import { Input, Modal } from '@mantine/core';

import searchSvg from './search.svg';

import classes from './index.module.scss';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

export function Search() {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('');
  const searchValue = useDebouncedValue(value, 1000);

  const { data } = useSearchMovie({ name: searchValue });

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <button onClick={open} className={classes.button}>
        <img src={searchSvg} alt="search" />
      </button>

      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <Input placeholder="Поиск" value={value} onChange={onSearchChange} />
        <div>
          {data?.docs?.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <div>{movie.name}</div>
            </Link>
          ))}
        </div>
      </Modal>
    </div>
  );
}
