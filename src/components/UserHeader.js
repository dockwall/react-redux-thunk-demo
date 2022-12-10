import React, { useEffect } from "react"
import { connect } from "react-redux";
import { fetchUser } from "../actions"

const UserHeader = ({ user, fetchUser, userID }) => {
    useEffect(() => {
        fetchUser(userID)
    }, [])

    if (!user) {
        return null;
    }

    return (
        <div className="header">
            {user.name}
        </div>
    )
};

// We can "prepare" props in mapPropsToState()
// ownProps - props that passed to a component in React

const mapPropsToState = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userID) }
};

export default connect(mapPropsToState, { fetchUser })(UserHeader);
