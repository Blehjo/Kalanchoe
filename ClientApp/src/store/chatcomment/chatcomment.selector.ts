import { createSelector } from 'reselect';

export const selectChatcommentReducer = (state) => state.chatcomment;

export const selectChatCommentItems = createSelector(
    [selectChatcommentReducer],
    (chatcomment) => chatcomment.chatcomments
);