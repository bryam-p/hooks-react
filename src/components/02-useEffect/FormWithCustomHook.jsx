import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'


const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    useEffect(() => {
        console.log('Email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
                    className="form-control mt-2"
                    autoComplete="off"
                    value={email}
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    className="form-control mt-2"
                    autoComplete="off"
                    value={password}
                    placeholder="********"
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default FormWithCustomHook

