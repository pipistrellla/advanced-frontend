import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { PageLoader } from 'shared/ui/PageLoader';
import React, {
    FC, Suspense, memo, useMemo,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entitis/User';

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => {

    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {

        if (route.authOnly && !isAuth)
            return false;

        return true;

    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            {/* в fallback  указывается элемент который будет показыватся при загрузке */}
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page-wrapper">{element}</div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );

};

export default memo(AppRouter);
