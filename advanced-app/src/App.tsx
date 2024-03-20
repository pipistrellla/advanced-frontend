import React, { FC } from 'react'
import Counter from './components/Counter';
import './index.scss'
interface AppProps {
    
}


const App: FC<AppProps> = ({  }) => {
    return (
        <div className='app'>
            <div>hellow World</div>
            <Counter></Counter>
        </div>
    )
}

export default App;