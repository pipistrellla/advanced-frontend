import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./AboutPage')), 1500);

}));
