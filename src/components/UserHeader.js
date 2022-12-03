import React, { useEffect } from "react"
import { connect } from "react-redux";
import { fetchUser } from "../actions"

const UserHeader = ({ users, fetchUser, userID }) => {
    useEffect(() => {
        fetchUser(userID)
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

export default connect(mapPropsToState, { fetchUser })(UserHeader);
