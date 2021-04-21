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
        title: "Title 1",
        body: "Body 1"
    },
    {
        userId: 1,
        id: 2,
        title: "Title 2",
        body: "Body 2"
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

    it('Should check if the userPosts list is obtainded by the postscomponent ', () => {
        props.getUserPosts = jest.fn();
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