import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    render() {
        const { post } = this.props;
        const singlePost = post ? (
            <div>
                <h4> {post.title} </h4>
                <p> {post.content} </p>
            </div>
        ) : (
                <h3>Loading posts</h3>
            )

        return (
            <div className="post">
                {singlePost}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post);