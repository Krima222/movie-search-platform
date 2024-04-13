import { Link } from 'react-router-dom';

import { Card } from '../Card';
import { Carousel } from '@mantine/carousel';

import classes from './index.module.scss';

export function SimilarMovies({
  similarMovies,
}: {
  similarMovies:
    | {
        id: number;
        name: string;
        poster: {
          url: string;
          previewUrl: string;
        };
        rating: {
          kp: number;
          imdb: number;
        };
      }[]
    | undefined;
}) {
  return (
    <>
      {similarMovies?.length !== 0 ? (
        <Carousel
          align="start"
          slideGap="lg"
          loop
          withControls={
            similarMovies && similarMovies?.length > 10 ? true : false
          }
        >
          {similarMovies?.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <Card
                  poster={movie.poster.url}
                  name={movie.name}
                  rating={movie.rating}
                />
                <div className={classes.name}>{movie.name}</div>
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>Нет подборки с подобными фильмами</div>
      )}
    </>
  );
}
