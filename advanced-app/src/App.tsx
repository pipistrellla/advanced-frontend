import { FC, Suspense, useContext, useState } from 'react';
// suspence позволяет показать пользователя, что идет загрузка
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import {Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/ClassNames/ClassNames';

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
                    <Route  path={'/about'} element={<AboutPageAsync/>}/>
                    <Route  path={'/'} element= {<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>

      

    )
}

export default App;