import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >UseContext</Link>
            <button className="navbar-toggler" type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-item nav-link" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" className="nav-item nav-link" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/login" className="nav-item nav-link" >Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
