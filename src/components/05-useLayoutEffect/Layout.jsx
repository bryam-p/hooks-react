import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../05-useLayoutEffect/layout.css'

const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0] //Se usa el !! para que no devuelva undefined sino false, si existe la data extraerla

    const parrafo = useRef()

    useLayoutEffect(() => {
        console.log(parrafo.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={parrafo}
                >{quote}</p>
            </blockquote>
            <button
                className="btn btn-dark mx-2"
                onClick={increment}
            >
                Siguiente quote
            </button>

            {
                counter < 2 ? (
                    <button
                        className="btn btn-dark"
                        onClick={decrement}
                        disabled
                    >
                        Anterior
                    </button>
                ) : (
                    <button
                        className="btn btn-dark"
                        onClick={decrement}
                    >
                        Anterior
                    </button>
                )
            }
        </div>
    )
}

export default Layout
