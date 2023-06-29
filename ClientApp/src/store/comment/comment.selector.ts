import { createSelector } from 'reselect';

export const selectCommentReducer = (state) => state.comment;

export const selectComments = createSelector(
    [selectCommentReducer],
    (comment) => comment.comments
);