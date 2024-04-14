import { useSearchParamChanger } from '../../hooks/useSearchParamChanger';
import { useActors } from '../../hooks/useActors';

import { Pagination } from '@mantine/core';

import classes from './index.module.scss';

export function Actors({ movieid }: { movieid: string }) {
  const { value, onChange } = useSearchParamChanger('page', '1');

  const { data: actorsData } = useActors({
    id: movieid ?? '',
  });

  return (
    <>
      {actorsData ? (
        <>
          {actorsData.total > 10 ? (
            <>
              <div className={classes.wrapper}>
                {actorsData.docs.map((actor) => (
                  <div key={actor.id}>
                    <div className={classes.photo}>
                      <img src={actor.photo} alt={actor.name} />
                    </div>
                    <div className={classes.name}>{actor.name}</div>
                  </div>
                ))}
              </div>

              <Pagination
                onChange={onChange}
                value={Number(value)}
                total={actorsData?.pages}
              />
            </>
          ) : (
            <div className={classes.wrapper}>
              {actorsData?.docs?.map((actor) => (
                <div key={actor.id}>
                  <div className={classes.photo}>
                    <img src={actor.photo} alt={actor.name} />
                  </div>
                  <div className={classes.name}>{actor.name}</div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>Информации об актерах нет</div>
      )}
    </>
  );
}
