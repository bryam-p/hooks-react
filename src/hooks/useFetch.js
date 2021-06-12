import { useState, useEffect, useRef } from 'react';


export const useFetch = (url) => { //Se pasa el prop

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null }) //Para que el estado del loading se reinicie en cada peticion
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
    }, [url]) //Solo cuando el url cambia

    return state
}
