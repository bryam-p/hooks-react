import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        //console.log('hey')
    }, [])

    useEffect(() => {
        //console.log('Form state cambio')
    }, [formState])

    useEffect(() => {
        //console.log('Email cambio')
    }, [email])

    const handleInputChange = ({ target }) => {
        console.log(target.value)
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <hr />


            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    autoComplete="off"
                    value={name}
                    placeholder="Nombre"
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    value={email}
                    placeholder="correo@correo.com"
                    onChange={handleInputChange}
                />
            </div>

            { name === '123' && <Message />}

        </div>
    )
}

export default SimpleForm
