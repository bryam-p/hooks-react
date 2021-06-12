import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0] //Se usa el !! para que no devuelva undefined sino false, si existe la data extraerla

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">Loading...</div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
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

export default MultipleCustomHooks
