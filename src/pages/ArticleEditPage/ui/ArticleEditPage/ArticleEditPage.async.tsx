import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);

}));
