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

// export const fetchUser = (userID) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${userID}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// };

export const fetchUser = function (userID) {
    return _.memoize(async function (dispatch) {
        const response = await jsonPlaceholder.get(`/users/${userID}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    });
};
