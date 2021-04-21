import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getUsers } from "../redux/Actions/UserAction"
import { connect } from "react-redux";
import SearchContainer from "./SearchComponent.js";
import {Table} from 'react-bootstrap';

export class TableComponent extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                <br></br>
                <SearchContainer></SearchContainer>
                <div className="container-fluid">

                    <Table striped bordered hover variant>
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
                                this.props.filtered_users.map(({ id, name, email, address, company }) =>
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
    filtered_users: state.MainReducer.filtered_users,
});

const dispatcherToPropsMapper = dispatch => ({
    getUsers: () => getUsers(dispatch),
});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;