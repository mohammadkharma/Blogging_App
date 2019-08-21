import React, { Component } from 'react';
import '../styles/showAllPosts.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowAllPosts extends Component {

   
    
    render() {
        // console.log('props', this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="postCard" key={post.id}>
                    <Link to={'/' + post.id} ><h3>{post.title}</h3></Link>
                    </div>
                )
            })
        ) : (<h1>No posts!</h1>);
        return (
            <div className="showPosts">
                <h1>ShowAllPosts</h1>
                {postList}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ShowAllPosts);