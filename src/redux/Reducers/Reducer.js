import * as ActionTypes from '../ActionTypes/Types.js';

const initialState = {
    users: [],
    filtered_users: [],
    posts: [],
    data_recieved: false,
}

const MainReducer = (state = initialState, action) => {
    if (action.type === ActionTypes.GET_ALL_USERS){
        return{
            ...state,
            users : action.payload,
            filtered_users : action.payload,
        };

    }
    else if (action.type === ActionTypes.GET_FILTERED_USERS){
        return{
            ...state,
            filtered_users : action.payload, 
            //users : action.payload, 
        };
    }
    else if (action.type === ActionTypes.GET_USER_POSTS){
        return{
            ...state,
            posts : action.payload, 
            data_recieved : action.success,
        };
    }
    else{
        return state;
    }
}
export default MainReducer;
