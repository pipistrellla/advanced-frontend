import { screen } from '@testing-library/react';

import { UserRole } from '@/entitis/User';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteForbidden,
    getRouteProfile,
} from '@/shared/const/router';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

import AppRouter from './AppRouter';

describe('app/router/router', () => {
    test('Страница должна отрендериться', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument();
    });
    test('Страница не найдена', async () => {
        ComponentRender(<AppRouter />, {
            route: '/awdadawdasdawdswdas',
        });

        const page = await screen.findByTestId('NotFoundPage');

        expect(page).toBeInTheDocument();
    });
    test('Редирект неавторизованного пользователя', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument();
    });
    test('доступ к закрытой странице для авторизованного пользователя', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteForbidden(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument();
    });

    test('Доступ запрещен (отсутствует роль)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен (есть соответствующая роль роль)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');

        expect(page).toBeInTheDocument();
    });
});
