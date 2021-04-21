import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { TableComponent } from './TableComponent';
import { MemoryRouter, Link, Route } from 'react-router-dom';
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
describe('Renders in TableComponent', () => {

    let props;
    beforeEach(() => {
        props = {
            users: mockData,
            filtered_users: mockData,
            posts: [],
            data_recieved: true,
        };
    });

    it('Should check if the table has rendered properly', () => {
        props.getUsers = jest.fn();
        const wrapper = shallow(<TableComponent {...props} />);
        const instance = wrapper.instance();
        // place where getUsers is invoked
        instance.componentDidMount();
        const callback = props.getUsers.mock.calls.length;

        expect(callback).toBe(1);
    });
})