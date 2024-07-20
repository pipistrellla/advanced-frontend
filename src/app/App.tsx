import { FC, Suspense, useEffect } from 'react';

// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import { useDispatch, useSelector } from 'react-redux';

import { getUserInited, userActions } from '@/entitis/User';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

interface AppProps {}
// lazyload позволяет уменьшить размер бандла
// так как грузит не все страницы стразу

const App: FC<AppProps> = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    useEffect(() => {
        dispatch(userActions.initAithData());
    }, [dispatch]);

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
