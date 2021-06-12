import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    const inputRef = useRef()
    // console.log(ref)

    const handleClick = () => {
        //document.querySelector('input').focus() //Solo pone el foco
        // document.querySelector('input').select() //Selecciona tambien el texto
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                className="btn btn-outline-dark mt-2"
                onClick={handleClick}
            >Focus</button>
        </div>
    )
}

export default FocusScreen
