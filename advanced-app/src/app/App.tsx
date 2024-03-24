import { FC } from 'react';
// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

interface AppProps {
    
}
// lazyload позволяет уменьшить размер бандла 
// так как грузит не все страницы стразу




const App: FC<AppProps> = ({  }) => {

    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app' , {} , [theme])}>
            <button onClick={()=> toggleTheme()}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Нас</Link>
            {/* в fallback  указывается элемент который будет показыватся при загрузке */}
            <AppRouter/>
        </div>

    )
}

export default App;