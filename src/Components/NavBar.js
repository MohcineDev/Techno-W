import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div className="container">

                <NavLink to="/">Logo</NavLink>
                <div className='links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar