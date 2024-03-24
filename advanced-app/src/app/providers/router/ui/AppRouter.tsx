import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

interface AppRouterProps {
    
}

const AppRouter: FC<AppRouterProps> = ({  }) => {
    return (
        <Suspense fallback={<div>is Loading.....</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) =>(
                    <Route key = {path} path={path} element ={element} />
                ) )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;