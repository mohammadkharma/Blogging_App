import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/showSinglePost.css';

class ShowSinglePost extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/showAllPosts');
    }

    render() {
        // console.log(this.props)
        // const { post } = this.props;
        // const singlePost = post ? (
        //     <div>
        //         <h4> {post.title} </h4>
        //         <p> {post.content} </p>
        //     </div>
        // ) : (
        //         <h3>Loading posts</h3>
        //     )

        return (
            <div className="post">
                <h4> {this.props.post.title} </h4>
                <p> {this.props.post.content} </p>
                <button onClick={this.handleClick} >Delete post</button>
                {/* {singlePost} */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.path_id;
    return {
        post: state.posts[id - 1]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSinglePost);