import React, { useEffect } from "react"
import { connect } from "react-redux";
import { fetchUsers } from "../actions"

const UserHeader = ({ users, fetchUsers, userID }) => {
    useEffect(() => {
        fetchUsers(userID)
    }, [])

    console.log(users)

    return (
        <div>
            UserHeader
        </div>
    )
};

const mapPropsToState = state => {
    return { users: state.users }
};

export default connect(mapPropsToState, { fetchUsers })(UserHeader);
