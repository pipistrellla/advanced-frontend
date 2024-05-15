import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);

}));
