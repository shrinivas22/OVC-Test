import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { getUsers } from "../redux/Actions/UserAction"
import { connect } from "react-redux";
import SearchContainer from "./SearchComponent.js";


class TableComponent extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                <SearchContainer></SearchContainer>
                <div className="container-fluid">

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Company</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.props.filteredUsers.map(({ id, name, email, address, company }) =>
                                    <tr id="user-row" key={id}>
                                        <td><Link to={`/posts/${name}/${id}`}>{name}</Link></td>
                                        <td>{email}</td>
                                        <td>{address.city}</td>
                                        <td>{company.name}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}


const stateToPropertyMapper = state => ({
    users: state.MainReducer.users,
    filteredUsers: state.MainReducer.filtered_users,
});

const dispatcherToPropsMapper = dispatch => ({
    getUsers: () => getUsers(dispatch),
    //getUserPosts: (userId, user_name) => getUserPosts(dispatch, userId, user_name),

});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;