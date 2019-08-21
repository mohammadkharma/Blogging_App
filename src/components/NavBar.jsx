import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css'

const NavBar = () => {
    return (
        <ul>
            <li><NavLink to="/" className='link'>Home</NavLink></li>
            <li><NavLink to="/createPost" className='link'>CreatePost</NavLink></li>
            <li><NavLink to="/showAllPosts" className='link'>ShowCurrentPosts</NavLink></li>
        </ul>
    )
}

export default NavBar;