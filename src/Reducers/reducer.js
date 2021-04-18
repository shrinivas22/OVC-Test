import * as ActionTypes from '../ActionTypes/actiontypes.js';

const initialState = {
    users: [],
    filtered_users: [],
    user_posts: [],
    user_name: null,
}

const reducer = (state = initialState, action) => {
    if (action.type === ActionTypes.GET_ALL_USERS){
        return{
            ...state,
            users : action.payload, 
        };

    }
    else if (action.type === ActionTypes.GET_FILTERED_USERS){
        return{
            ...state,
            filtered_users : action.searched_users, 
        };
    }

    else{
        return state;
    }
}
export default reducer;
