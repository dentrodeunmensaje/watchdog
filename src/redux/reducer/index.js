const initialState = {
    user: {
        name: 'John Doe',
        age: 24
    },
    posts: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;