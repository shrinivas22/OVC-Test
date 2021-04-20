import * as ActionTypes from '../ActionTypes/Types.js';
import MainReducer from './Reducer'

describe('JSON API Reducers', () => {
    const initialState = {
        users: [],
        filtered_users: [],
        posts: [],
        data_recieved: false,
    }

    it('Should return default initial state when there is no action', () => {
        const newState = MainReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return newState with update in usersList [GET_ALL_USERS]', () => {
        const usersList = [{ id: 1, name: "xyz" }, { id: 2, name: "abc" }, { id: 3, name: "qwe" }]
        // acts like our mock dispatcher
        const newState = MainReducer(undefined, {
            type: ActionTypes.GET_ALL_USERS,
            payload: usersList,
        });
        expect(newState).toEqual({
            users: usersList,
            filtered_users: usersList,
            posts: [],
            data_recieved: false,
        });
    });

    it('Should return newState with update in filteredUsersList [GET_FILTERED_USERS]', () => {
        const filteredUsersList = [{ id: 1, name: "xyz" }, { id: 2, name: "xzz" }];
        // acts like our mock dispatcher
        const newState = MainReducer(undefined, {
            type: ActionTypes.GET_FILTERED_USERS,
            payload: filteredUsersList,
        });

        expect(newState).toEqual({
            users: [],
            filtered_users: filteredUsersList,
            posts: [],
            data_recieved: false,
        });
    });

    it('Should return newState with update in posts [GET_USER_POSTS]', () => {
        const userPosts = [{ id: 1, name: "xyz" }, { id: 2, name: "xzz" }];
        // acts like our mock dispatcher
        const newState = MainReducer(undefined, {
            type: ActionTypes.GET_USER_POSTS,
            payload: userPosts,
            success: true,
        });

        expect(newState).toEqual({
            users: [],
            filtered_users: [],
            posts: userPosts,
            data_recieved: true,
        });
    });


}
)