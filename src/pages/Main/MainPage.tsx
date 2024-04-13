import { Link, useLocation } from 'react-router-dom';

import { useMovies } from '../../hooks/useMovies';
import { useSearchParamChanger } from '../../hooks/useSearchParamChanger';

import { Card } from '../../components/Card';
import { Filter } from '../../components/Filter';
import { Search } from '../../components/Search';

import { Pagination } from '@mantine/core';
import { Loader } from '@mantine/core';

import '@mantine/dates/styles.css';
import classes from './Main.module.scss';
import { AgeRatingSelect } from '../../components/AgeRatingSelect';

export function MainPage() {
  const location = useLocation();

  const { data } = useMovies();

  const { value, onChange } = useSearchParamChanger('page', '1');

  if (!data) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Filter
          placeholder="Выберете количество фильмов на странице"
          type="number"
          name="limit"
        />

        <Filter placeholder="Год фильмов" type="text" name="year" />
        <AgeRatingSelect />
        <Filter
          placeholder="Страна фильмов"
          type="text"
          name="countries.name"
        />
        <div className={classes.search}>
          <Search />
        </div>
      </div>
      <div className={classes.main}>
        <ul className={classes.ul}>
          {data.docs.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`movie/${movie.id}`}
                onClick={() => localStorage.setItem('search', location.search)}
              >
                <Card
                  rating={movie.rating}
                  poster={movie.poster.url}
                  name={movie.name}
                />
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          onChange={onChange}
          value={Number(value)}
          total={data?.pages}
        />
      </div>
    </div>
  );
}
