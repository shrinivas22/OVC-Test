import React, { Component } from 'react';
import { connect } from "react-redux";
import { getFilteredUsers } from "../redux/Actions/UserAction";
import {InputGroup, FormControl} from 'react-bootstrap'
export class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const searched_word = e.target.value;
        //if (e.target.value !== "") {
        this.props.getFilteredUsers(searched_word, this.props.users);
        //}
    }
    render() {
        return (
            <div style={{position:'relative'}}>
                <InputGroup size="mb-3">
            <FormControl aria-label="Default"
                test-attr = "userSearch"
                onChange = {this.handleChange}
                placeholder="Search..."
                aria-describedby="inputGroup-sizing-default" />
        </InputGroup>
        <br></br>
        </div>
            



        )
    }
}

const stateToPropertyMapper = state => ({
    users: state.MainReducer.users,
    filtered_users: state.MainReducer.filtered_users
});

const dispatcherToPropsMapper = dispatch => ({
    getFilteredUsers: (search_keyword, users) => getFilteredUsers(dispatch, search_keyword, users),
});

const SearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(SearchBarComponent);

export default SearchContainer;