import { FC, Suspense, lazy } from 'react';
import { AddArticleRatingProps } from './AddArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const AddArticleRatingLazy = lazy <FC<AddArticleRatingProps>>(
    () => import('./AddArticleRating'),
);

export const AddArticleRatingAsync = (props:AddArticleRatingProps) => (

    <Suspense fallback={(<Skeleton width="100%" height={120} />)}>
        <AddArticleRatingLazy {...props} />
    </Suspense>
);
