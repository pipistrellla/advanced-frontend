import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./MainPage')), 1500);

}));
