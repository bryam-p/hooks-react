import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    const [counter, setCounter] = useState({ //Con setState se sobreescriben todos
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    const { counter1, counter2 } = counter //se desfragmenta para no usar counter.counter1 y poder usar spred (...)

    return (
        <div>
            {/* <h1>Counter {counter}</h1> */}
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={() => {
                    setCounter({
                        ...counter,
                        counter1: counter1 + 1,
                    })
                }}
            >
                +1
            </button>
        </div>
    )
}

export default CounterApp
