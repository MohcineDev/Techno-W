import React, { useContext } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { loginContext } from '../Contexts/Login'

function NavBar() {

    const { logged } = useContext(loginContext)

    return (
        <nav>
            <div className="nav-container">

                <NavLink to="/">Logo</NavLink>
                <div className='links'>
                    <NavLink to="/">Home</NavLink>
                    {
                        logged ? <NavLink to="/posts">Posts</NavLink> : ''
                    }
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar