import React, { Component } from 'react';
import uuid from 'uuid';
import '../styles/createPost.css';

class CreatePost extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        const username = document.querySelector('#username');
        const title = document.querySelector('#title');
        const content = document.querySelector('#content');
        this.setState({
            post: [
                {username: username.value, title: title.value, content: content.value, id: uuid.v4()}
            ]
        })
        
    }

    render(){
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='formRow'><span>Username:</span><input type="text" id="username" /></div>
                <div className='formRow'><span>Title:</span><input type="text" id="title" /></div>
                <div className='formRow'><span>Content:</span><input type="text" id="content" /></div>
                <input type="submit" value="Create a post" />
            </form>
        )
    }
}

export default CreatePost;