import React from 'react';
import {findTestAttr}  from '../Utils/util';
import {shallow, mount, render } from 'enzyme';
import {SearchBarComponent} from './SearchComponent';
import * as enzymeConfigure from '../configureTests';

// Configuring Enzyme Adapter 
enzymeConfigure

const mockData = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
        },
        company: {
            name: "Romaguera-Crona",
        }
    },
    {
        id: 2,
        name: "Leanardo DiCaprio",
        username: "Leo",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
        },
        company: {
            name: "Romaguera-Crona",
        }
    }
];

describe('Renders in SearchBar', () => {
    let props;
    beforeEach(() => {
        props = {
            users: mockData,
            filtered_users: mockData,
            user_posts: [],
            data_recieved: true,
        };
    });

    it('Change the state of the list based on the search keyword', () => {
        props.getFilteredUsers = jest.fn();
        const wrapper = shallow(<SearchBarComponent { ...props }/>);
        
        // Do action
        const inputSearch = findTestAttr(wrapper,'userSearch')
        inputSearch.simulate('change', { 
            target: { value: 'le' , value: 'lea'} 
        });

        inputSearch.simulate('change', { 
            target: {value: 'lea'} 
        });
        const callback = props.getFilteredUsers.mock.calls.length;
       
        expect(callback).toBe(2);
    });
});