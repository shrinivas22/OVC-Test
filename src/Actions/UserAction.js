import * as ActionTypes from '../ActionTypes/actiontypes.js';


const baseAPIURL = "https://jsonplaceholder.typicode.com";

export const getUsers = dispatch => {
    fetch(baseAPIURL + '/users')
        .then(response => response.json()) 
        .then(data => {
            dispatch({
                type: ActionTypes.GET_ALL_USERS,
                payload: data,
            })
            console.log(data);
        })
        .catch((error) => {
            dispatch({
                type: 'GET_ALL_USERS_ERROR',
                message: "Couldn't get all users. Please try again!",
                payload: [],
            })
            console.log('Looks like there was a problem: \n', error);
        });
}

