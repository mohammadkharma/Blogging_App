import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to='/' className="brand-logo">Blogging</NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/createPost">CreatePost</NavLink></li>
                    <li><NavLink to="/showCurrentPosts">ShowCurrentPosts</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;