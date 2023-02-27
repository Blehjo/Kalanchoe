import { createSelector } from 'reselect';

export const selectPostReducer = (state) => state.post;

export const selectPosts = createSelector(
    [selectPostReducer],
    (post) => post.posts
);

export const selectSinglePost = createSelector(
    [selectPostReducer],
    (post) => post.singlePost
);

export const selectPostsIsLoading = createSelector(
    [selectPostReducer],
    (post) => post.isLoading
);