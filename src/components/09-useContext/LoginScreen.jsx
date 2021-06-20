import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const userLogin = {
        id: 123,
        nombre: 'bryam',
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={() => setUser(userLogin)}
            >
                Logearse
            </button>
        </div>
    )
}

export default LoginScreen
