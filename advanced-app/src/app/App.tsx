import { FC } from 'react';
// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

interface AppProps {
    
}
// lazyload позволяет уменьшить размер бандла 
// так как грузит не все страницы стразу




const App: FC<AppProps> = ({  }) => {

    const {theme} = useTheme();


    return (
        <div className={classNames('app' , {} , [theme])}>
            <Suspense fallback ={<div>Language loading.....</div>}>
                <Navbar />
                
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>

    )
}

export default App;