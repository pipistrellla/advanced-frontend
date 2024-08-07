import React, { FC, Suspense, memo, useCallback } from 'react';

import { Routes, Route } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';
import { routeConfig } from '../config/routeConfig';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            <RequireRole roles={route.roles}>
                                {element}
                            </RequireRole>
                        </RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
