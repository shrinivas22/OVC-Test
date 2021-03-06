import * as ActionTypes from '../ActionTypes/Types';


const baseAPIURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async dispatch => {

    await fetch(baseAPIURL + '/users')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: ActionTypes.GET_ALL_USERS,
                payload: data,
            })
        })
        .catch((error) => {
            dispatch({
                type: 'GET_ALL_USERS_ERROR',
                payload: [],
            })
            console.log('Looks like there was a problem: \n', error);
        });
}

export const getUserPosts = async (dispatch, userId) => {
    //push(`/posts/${userId}`);

    let params = {
        "userId": userId,
    };
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');


    let url = baseAPIURL + '/posts?' + query;

    dispatch({
        type: ActionTypes.GET_USER_POSTS,
        payload: [],
        success: false,
    })

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: ActionTypes.GET_USER_POSTS,
                payload: data,
                //just a variable to add a loader in future for larger data
                success: true,
            })
        })
        .catch((error) => {
            dispatch({
                type: 'GET_USERS_POSTS_ERROR',
                payload: [],
                success: false,
            })
            console.log('Looks like there was a problem: \n', error);
        });
}

export const getFilteredUsers = (dispatch, search_word, all_users) => {

    let filtered_users = all_users;
    if (search_word !== '') {
        filtered_users = all_users.filter(x => x.name.toLowerCase()
            .includes(search_word.trim().toLowerCase()))
    }
    dispatch({
        type: ActionTypes.GET_FILTERED_USERS,
        payload: filtered_users,
    })
}
