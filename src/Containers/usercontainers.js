import { connect } from "react-redux";
import TableComponent from "../Components/TableComponent";
import {getUsers}  from "../Actions/UserAction";

const stateToPropertyMapper = state => ({
    users: state.users,
});

const dispatcherToPropsMapper = dispatch => ({
    getUsers: () => getUsers(dispatch),
});

const TableContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(TableComponent);

export default TableContainer;