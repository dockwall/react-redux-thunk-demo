import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(({ userId, id, title, body }) => {
            return (
                <div className="item" key={id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                        <UserHeader userID={userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
};

const mapPropsToState = state => {
    return { posts: state.posts }
};

export default connect(mapPropsToState, { fetchPosts })(PostList);
