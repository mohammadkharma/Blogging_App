import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href='/' className="brand-logo">Blogging</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/createPost">CreatePost</a></li>
                    <li><a href="/showCurrentPosts">ShowCurrentPosts</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;