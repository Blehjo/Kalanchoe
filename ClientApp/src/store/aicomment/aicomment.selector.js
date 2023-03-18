import { createSelector } from 'reselect';

export const selectAicommentReducer = (state) => state.aicomment;

export const selectAiCommentItems = createSelector(
    [selectChatcommentReducer],
    (aicomment) => aicomment.aicomments
);