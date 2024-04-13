import { Pagination, Spoiler } from '@mantine/core';
import * as DOMPurify from 'dompurify';

import { useComments } from '../../hooks/useComments';
import { useSearchParamChanger } from '../../hooks/useSearchParamChanger';

import classes from './index.module.scss';

export function Comments({ movieid }: { movieid: string }) {
  const { value, onChange } = useSearchParamChanger('page', '1');

  const { data: commentsData } = useComments({
    id: movieid ?? '',
  });

  return (
    <>
      {commentsData?.docs.length !== 0 ? (
        <>
          <div className={classes.wrapper}>
            {commentsData?.docs.map((comment) => (
              <div key={comment.id} className={classes.card}>
                <div>{comment.author}</div>
                <Spoiler
                  showLabel="Показать весь отзыв"
                  hideLabel="Скрыть отзыв"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(comment.review),
                    }}
                    className={classes.text}
                  />
                </Spoiler>
              </div>
            ))}
          </div>
          <Pagination
            onChange={onChange}
            value={Number(value)}
            total={commentsData?.pages ?? 10}
          />
        </>
      ) : (
        <div>Нет информации о отзывах</div>
      )}
    </>
  );
}
