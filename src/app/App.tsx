import { FC, memo, Suspense, useEffect } from 'react';

// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entitis/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { useAppToolbar } from './lib/useAppToolbar.tsx/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}
// lazyload позволяет уменьшить размер бандла
// так как грузит не все страницы стразу

const App: FC<AppProps> = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    const toolbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <div className={classNames('app', {}, [theme])}>
                        <PageLoader />
                    </div>
                }
                on={
                    <div className={classNames('app_redesigned', {}, [theme])}>
                        <AppLoaderLayout />
                    </div>
                }
            />
        );
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback={<div />}>
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback={<div />}>
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
