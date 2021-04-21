import React from 'react';
import { shallow} from 'enzyme';
import { PostsComponent } from './PostsComponent';
import * as enzymeConfigure from '../configureTests';
//jest.mock('./PostsComponent.js');

// Configuring Enzyme Adapter 
enzymeConfigure

const mockDataUserPosts = [
    {
        userId: 1,
        id: 1,
        title: "hjkdfhkjfhkhs",
        body: "jdfkjfkjfhkfsh"
    },
    {
        userId: 1,
        id: 2,
        title: "fdjkhkjfshkjdfsh",
        body: "fldjhkjhfkjhdfskj"
    }
];

describe('Renders in SearchBar', () => {
    let props;
    beforeEach(() => {
        props = {
            users: [],
            filtered_users: [],
            posts: mockDataUserPosts,
            data_recieved: true,
        };
    });

    it('Should check if the userPosts list is obtainded by the postsComponent ', () => {
        props.getUserPosts = jest.fn();
        // handling params to obtain the link url params as props to this component
        const wrapper = shallow(<PostsComponent
            {...props}
            match={{ params: { userId: 1, name: 'xyz' }, isExact: true, path: "", url: "" }}
        />);
        // Checking if getUserPosts has been called in the constructor
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance.props, 'getUserPosts');

        expect(spy).toHaveBeenCalledTimes(1);
    });
});