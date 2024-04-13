import { Link, useParams } from 'react-router-dom';

import { useMovie } from '../../hooks/useMovie';
import { usePosters } from '../../hooks/usePosters';

import { Actors } from '../../components/Actors';

import { Carousel } from '@mantine/carousel';

import classes from './SingleMoviePage.module.scss';
import '@mantine/carousel/styles.css';
import { Loader, Spoiler } from '@mantine/core';
import { Comments } from '../../components/Comments';
import { SequelsAndPrequels } from '../../components/SequelsAndPrequels';
import { SimilarMovies } from '../../components/SimilarMovies';

export function SingleMoviePage() {
  const { movieid } = useParams();

  const { data: movieData } = useMovie({
    id: movieid ?? '',
  });

  const { data: postersData } = usePosters({
    id: movieid ?? '',
  });

  if (!movieid) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      <Link to={`/${localStorage.getItem('search') ?? ''}`}>
        <button className={classes.button}>Вернуться на главную</button>
      </Link>
      <div>{movieData?.id}</div>
      <div className={classes.inform}>
        <div className={classes.img}>
          <img src={movieData?.poster.url} alt={movieData?.name} />
        </div>
        <div>
          <h1 className={classes.title}>{movieData?.name}</h1>
          <div>
            <div className={classes.rating}>{movieData?.rating.kp}</div>
            <div className={classes.rating}>{movieData?.rating.imdb}</div>
          </div>
          <div className={classes.description}>
            <Spoiler showLabel="Полное описание" hideLabel="Свернуть">
              <p>{movieData?.description}</p>
            </Spoiler>
          </div>
        </div>
      </div>
      <div>
        <span className={classes.title}>Актёры</span>
        <Actors movieid={movieid} />
      </div>
      <div>
        <span className={classes.title}>Cписок сезонов и серий</span>
        <SequelsAndPrequels
          sequelsAndPrequels={movieData?.sequelsAndPrequels}
        />
      </div>
      <div>
        <span className={classes.title}>Кадры из фильма</span>
        {postersData?.docs.length !== 0 ? (
          <Carousel
            height={300}
            slideSize="33.333333%"
            slideGap="sm"
            loop
            align="start"
          >
            {postersData?.docs.map((poster) => (
              <img key={poster.id} src={poster.url} alt="" />
            ))}
          </Carousel>
        ) : (
          <div>Постеров к фильму нет</div>
        )}
      </div>
      <div>
        <span className={classes.title}>Смотрите также</span>
        <SimilarMovies similarMovies={movieData?.similarMovies} />
      </div>
      <div>
        <span className={classes.title}>Отзывы</span>
        <Comments movieid={movieid} />
      </div>
    </div>
  );
}
