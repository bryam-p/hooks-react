import React, { useState, useMemo } from 'react'
import { ProcesoPesado } from '../../helpers/ProcesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../05-useLayoutEffect/layout.css'


const MemoHook = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(false)
    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter]) //funcion procesoPesado(counter) y dependencia [counter]

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter} </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-outline-dark"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show)
                }}
            >Show/hidden {JSON.stringify(show)}</button>

        </div>
    )
}

export default MemoHook
