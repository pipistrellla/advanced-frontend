import { PageLoader } from 'shared/ui/PageLoader';
import React, {
    FC, Suspense, memo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => {

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {

        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
                }
            />
        );

    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            {/* в fallback  указывается элемент который будет показыватся при загрузке */}
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );

};

export default memo(AppRouter);
