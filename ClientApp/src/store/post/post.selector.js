import { createSelector } from 'reselect';

export const selectPostReducer = (state) => state.post;

export const selectPosts = createSelector(
    [selectPostReducer],
    (postsSlice) => postsSlice.posts
);

export const selectPostsIsLoading = createSelector(
    [selectPostReducer],
    (postsSlice) => postsSlice.isLoading
);