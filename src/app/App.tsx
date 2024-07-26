import { FC, Suspense, useEffect } from 'react';

// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entitis/User';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

interface AppProps {}
// lazyload позволяет уменьшить размер бандла
// так как грузит не все страницы стразу

const App: FC<AppProps> = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <PageLoader />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
