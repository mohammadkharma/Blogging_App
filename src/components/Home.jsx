import React, { Component } from 'react';
import '../styles/home.css';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="postCard" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    </div>
                )
            })
        ) : (<h1>No posts!</h1>);
        return (
            <div className="home">
                <h1>Home</h1>
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

export default connect(mapStateToProps)(Home);