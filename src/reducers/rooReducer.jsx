const initState = {
    posts: [
        {id: 1, username: 'Moe', title: 'How to code.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lectus molestie dui volutpat condimentum id ut sem. Vestibulum sed elit et ligula cursus tincidunt quis quis ante. Nam non efficitur magna, ac accumsan turpis. Etiam vel tempus sapien. Nullam ultricies mauris pretium nisl tempus mattis. Donec scelerisque tellus felis, et mattis dolor tincidunt quis. In pulvinar eros metus, quis lobortis mauris venenatis eget. Morbi blandit ante sit amet massa commodo, eget molestie diam elementum. Nulla facilisi. Maecenas ultrices, nisi eget volutpat elementum, metus risus dapibus mauris, vel porta turpis tellus a arcu. Aliquam sed felis metus. Suspendisse ut urna quam. Donec blandit facilisis urna non commodo. Ut id neque sit amet elit sodales dignissim sed eu nisi. Duis eget mi id ligula commodo lacinia.'},
        {id: 2, username: 'Roy', title: 'Chasing bugs.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lectus molestie dui volutpat condimentum id ut sem. Vestibulum sed elit et ligula cursus tincidunt quis quis ante. Nam non efficitur magna, ac accumsan turpis. Etiam vel tempus sapien. Nullam ultricies mauris pretium nisl tempus mattis. Donec scelerisque tellus felis, et mattis dolor tincidunt quis. In pulvinar eros metus, quis lobortis mauris venenatis eget. Morbi blandit ante sit amet massa commodo, eget molestie diam elementum. Nulla facilisi. Maecenas ultrices, nisi eget volutpat elementum, metus risus dapibus mauris, vel porta turpis tellus a arcu. Aliquam sed felis metus. Suspendisse ut urna quam. Donec blandit facilisis urna non commodo. Ut id neque sit amet elit sodales dignissim sed eu nisi. Duis eget mi id ligula commodo lacinia.'},
        {id: 3, username: 'Milia', title: 'Mastering React.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lectus molestie dui volutpat condimentum id ut sem. Vestibulum sed elit et ligula cursus tincidunt quis quis ante. Nam non efficitur magna, ac accumsan turpis. Etiam vel tempus sapien. Nullam ultricies mauris pretium nisl tempus mattis. Donec scelerisque tellus felis, et mattis dolor tincidunt quis. In pulvinar eros metus, quis lobortis mauris venenatis eget. Morbi blandit ante sit amet massa commodo, eget molestie diam elementum. Nulla facilisi. Maecenas ultrices, nisi eget volutpat elementum, metus risus dapibus mauris, vel porta turpis tellus a arcu. Aliquam sed felis metus. Suspendisse ut urna quam. Donec blandit facilisis urna non commodo. Ut id neque sit amet elit sodales dignissim sed eu nisi. Duis eget mi id ligula commodo lacinia.'}
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log('state', state)
    // console.log('actions', action)
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    if(action.type === 'ADD_POST') {
        return {
            posts: [...state.posts, action.post]
        }
    }    
    return state;
}

export default rootReducer;