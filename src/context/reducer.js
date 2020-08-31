export const initialState = {
    messages:[],
    user:null,
    users:[]
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'ADD_TO_MESSAGES':
            return {...state, messages: [...state.messages, action.payload]};
        case 'ADD_TO_USERS':
            return {...state, users: action.payload};
        default:
            return state;
    }
}

export default reducer;