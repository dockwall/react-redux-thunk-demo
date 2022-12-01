const postsReducer = (postsList = [], newPostsList) => {
    return (newPostsList.type === 'FETCH_POSTS') ?
        newPostsList : postsList;
};

export default postsReducer;
