import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

// Thunk allows us to return objects AND functions from Action Creators.
// In "function", we can STOP, MODIFY, DISPATCH or do something else with action.
// If we want to dispatch action, we need it to do MANUALLY
// Also we can use second argument - getState(). It get us all current data from Redux store

// fn => fn => ... - one function returns other function that returns ...

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// This is a private helper for fetchUser action
// It uses Lodash memoization - fn with unique argument can be called only once
// If argument is new unique userID, it dispatches new action

const _getCurrentUser = _.memoize(async (currentUserID, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${currentUserID}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});

// We use our private helper in main action creator
export const fetchUser = (userID) => dispatch => {
    _getCurrentUser(userID, dispatch);
};

// We separated helper for correct memoization
// With this solution we don't have ability to dynamically refetch user data
// Every unique user fetches only one time
