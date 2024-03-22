import { FC, Suspense } from 'react';
// suspence позволяет показать пользователю, что идет загрузка (нужно обернуть)
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Link, Routes, Route } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';



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
            <Suspense fallback={<div>is Loading.....</div>}>
                <Routes>
                    <Route  path={'/about'} element={<AboutPage/>}/>
                    <Route  path={'/'} element= {<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>

      

    )
}

export default App;