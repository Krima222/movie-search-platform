import { Link } from 'react-router-dom';

import { Card } from '../Card';

import classes from './index.module.scss';

export function SequelsAndPrequels({
  sequelsAndPrequels,
}: {
  sequelsAndPrequels:
    | {
        id: number;
        name: string;
        poster: {
          url: string;
          previewUrl: string;
        };
      }[]
    | undefined;
}) {
  return (
    <div className={classes.movie}>
      {sequelsAndPrequels?.length !== 0 ? (
        sequelsAndPrequels?.map((movie) => (
          <div className={classes.movie} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Card poster={movie.poster.url} name={movie.name} />
              <div className={classes.name}>{movie.name}</div>
            </Link>
          </div>
        ))
      ) : (
        <div>Сезонов и серии нет...</div>
      )}
    </div>
  );
}
