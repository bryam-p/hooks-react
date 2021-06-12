import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'
import '../02-useEffect/effects.css'

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((numero) => {
        setCounter(c => c + numero)
    }, [setCounter])

    return (
        <div>
            <h1>Use callback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook
