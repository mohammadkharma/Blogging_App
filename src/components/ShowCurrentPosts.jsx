import React from 'react';
import '../styles/showCurrentPosts.css'


const ShowCurrentPosts = () => {

    // componentDidMount() { show posts }

    return (
        <div className="showPosts">
        <h2>Post Title</h2>
        <a href="/">post content</a>
        <p>Username + Date</p>
        </div>
    )
}

export default ShowCurrentPosts;