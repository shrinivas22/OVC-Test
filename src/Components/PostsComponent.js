import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { connect } from "react-redux";
import { getUserPosts } from "../redux/Actions/UserAction"
class PostsComponent extends Component {

    constructor(props){
        super(props);
        const name = this.props.match.params.name;
        const id = this.props.match.params.userID;
        this.props.getUserPosts(id);
        

    }
    componentDidMount() {
        console.log(this.props.match.params);
        const name = this.props.match.params.name;
        const id = this.props.match.params.userID;

        //this.props.getUserPosts(id, name);

        console.log(this.props.posts);
        console.log(this.props.history);
        console.log(this.props.match.params.usedID);
    }

    render() {
        return (
            <div className="container-fluid">
                <h3>{this.props.match.params.name}'s Posts:</h3>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.posts.map(post =>
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.MainReducer.posts,
    dataRecieved: state.MainReducer.data_recieved,
});

const dispatcherToPropsMapper = dispatch => ({
    getUserPosts: (userId) => getUserPosts(dispatch, userId),
})

const PostComponent = connect(mapStateToProps,dispatcherToPropsMapper)(PostsComponent);
export default PostComponent;