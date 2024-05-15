import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./ArticlePage')), 400);

}));
