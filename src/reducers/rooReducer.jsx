const initState = {
    posts: []
}

const rootReducer = (state = initState, action) => {
    // console.log('state', state)
    // console.log('actions', action)
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    } else if (action.type === 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
    return state;
}

export default rootReducer;