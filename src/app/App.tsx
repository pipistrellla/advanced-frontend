import {
    FC, Suspense, useEffect, useState,
} from 'react';
// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entitis/User';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

interface AppProps {

}
// lazyload позволяет уменьшить размер бандла
// так как грузит не все страницы стразу

const App: FC<AppProps> = () => {

    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(userActions.initAithData());

    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );

};

export default App;
