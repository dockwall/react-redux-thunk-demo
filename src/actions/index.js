import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

// How to use redux-thunk as a middleware?
// Thunk allows us to return objects AND functions from Action Creators.
// In "function", we can STOP, MODIFY or do something else with action.
// If we want to dispatch action, we need it to do MANUALLY (first argument)
// Also we can use second argument - getStore/ It get us all current data from Redux store

// fn => fn => ... - one function returns other function that returns ...

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

const _getCurrentUser = _.memoize(async (currentUserID, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${currentUserID}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});

export const fetchUser = (userID) => dispatch => {
    _getCurrentUser(userID, dispatch);
};

// with this solution we don't have ability to refetch user data
// every user fetches only one time