import { usePosters } from '../../hooks/usePosters';

import { Carousel } from '@mantine/carousel';
import { Loader } from '@mantine/core';

import classes from './index.module.scss';

export function Posters({ movieid }: { movieid: string }) {
  const { data: postersData } = usePosters({
    id: movieid ?? '',
  });

  if (!postersData) {
    return <Loader />;
  }

  return (
    <>
      {postersData?.docs.length !== 0 ? (
        <div>
          <Carousel
            slideSize="33.333333%"
            slideGap="sm"
            align="start"
            loop
            controlSize={40}
          >
            {postersData?.docs.map((poster) => (
              <Carousel.Slide key={poster.id}>
                <img
                  className={classes.img}
                  key={poster.id}
                  src={poster.url}
                  alt="постер"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      ) : (
        <div>Постеров к фильму нет</div>
      )}
    </>
  );
}
