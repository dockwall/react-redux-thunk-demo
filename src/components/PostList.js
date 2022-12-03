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
                    <UserHeader userID={userId} />
                    <div className="content">
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
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
