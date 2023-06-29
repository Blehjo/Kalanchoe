import { createSelector } from 'reselect';

export const selectMessagecommentReducer = (state) => state.messagecomment;

export const selectMessageCommentItems = createSelector(
    [selectMessagecommentReducer],
    (messagecomment) => messagecomment.messagecomments
);