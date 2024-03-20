import React, { FC, useState } from 'react'
import classes from './Counter.module.scss'

interface CounterProps {
    
}

const Counter: FC<CounterProps> = ({  }) => {
    const [counter, setCounter] = useState(0)

    const increment = (n:number)  => {
        setCounter(n+ counter)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.CBtn} onClick={() => increment(12)}> increase</button>
        </div>
    )
}

export default Counter;