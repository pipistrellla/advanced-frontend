import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {

    // @ts-ignore
    // для искусственной задержки
    setTimeout(() => resolve(import('./ProfilePage')), 1500);

}));
