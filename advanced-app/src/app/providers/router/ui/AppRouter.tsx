import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => (
    <Suspense fallback={<div>is Loading.....</div>}>
        {/* в fallback  указывается элемент который будет показыватся при загрузке */}
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
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

export default AppRouter;
