import { FC } from 'react';
// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

interface AppProps {
    
}
// lazyload позволяет уменьшить размер бандла 
// так как грузит не все страницы стразу




const App: FC<AppProps> = ({  }) => {

    const {theme} = useTheme();


    return (
        <div className={classNames('app' , {} , [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>

    )
}

export default App;