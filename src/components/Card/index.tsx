import cx from 'clsx';
import classes from './index.module.scss';

export function Card({
  rating,
  poster,
  name,
}: {
  rating?: {
    kp: number;
    imdb: number;
  };
  poster: string;
  name: string;
}) {
  const ratingClasses = cx(classes.rating, {
    [classes.green]: rating && rating.imdb > 7,
    [classes.red]: rating && rating.imdb < 4,
  });

  return (
    <button className={classes.block}>
      {rating && <div className={ratingClasses}>{rating.imdb}</div>}
      <div className={classes.icon}>
        <img src={poster} alt={name} />
      </div>
    </button>
  );
}
