import React, { Component } from 'react';
import { connect } from "react-redux";
import { getFilteredUsers } from "../redux/Actions/UserAction";
import {InputGroup, FormControl} from 'react-bootstrap'
class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const searched_word = e.target.value;
        //if (e.target.value !== "") {
        console.log(searched_word, this.props.usersList);
        this.props.getFilteredUsers(searched_word, this.props.usersList);
        //}
    }
    render() {
        return (
            <div >
                <InputGroup size="mb-3" style={{'marginLeft':'40%'}}>
            <FormControl aria-label="Default"
                onChange={this.handleChange}
                placeholder="Search..."
                aria-describedby="inputGroup-sizing-default" />
        </InputGroup>
        <br></br>
        </div>
            



        )
    }
}

const stateToPropertyMapper = state => ({
    usersList: state.MainReducer.users,
    filterdUsers: state.MainReducer.filtered_users
});

const dispatcherToPropsMapper = dispatch => ({
    getFilteredUsers: (search_keyword, users) => getFilteredUsers(dispatch, search_keyword, users),
});

const SearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(SearchBarComponent);

export default SearchContainer;