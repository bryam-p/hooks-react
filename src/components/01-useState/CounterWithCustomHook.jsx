import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'


const CounterWithCustomHook = () => {

    const { state, reset, increment, decrement } = useCounter(100)

    return (
        <div>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(3)} className="btn btn-primary mx-2">+1</button>
            <button onClick={() => decrement(3)} className="btn btn-primary mx-2">-1</button>
            <button onClick={reset} className="btn btn-primary mx-2">Reset</button>
        </div>
    )
}

export default CounterWithCustomHook
