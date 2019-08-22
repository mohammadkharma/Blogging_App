import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import '../styles/createPost.css';

class CreatePost extends Component {
    
    state = {
        post: {}
    }

    handleClick = (e) => {
        e.preventDefault();
        const username = document.querySelector('#username');
        const title = document.querySelector('#title');
        const content = document.querySelector('#content');
        let UI = uuid.v4();
        this.setState({
            post: {id: UI, username: username.value, title: title.value, content: content.value}
        })
        setTimeout(() => {
            this.props.history.push('/showAllPosts');
        }, 500)
    }

    render(){
        // console.log(this.state.post)
        this.props.addPost(this.state.post);
        return (
            <form>
                <div className='formRow'><span>Username:</span><input type="text" id="username" /></div>
                <div className='formRow'><span>Title:</span><input type="text" id="title" /></div>
                <div className='formRow'><span>Content:</span><input type="text" id="content" /></div>
                <input type="submit" value="Create a post" onClick={this.handleClick} />
            </form>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.path_id;
//     return {
//         post: state.posts[id - 1]
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => { dispatch({type: 'ADD_POST', post: post}) }
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
// export default CreatePost;