import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectAiCommentReducer = (state: RootState) => state.aicomment;

export const selectAiCommentId = createSelector(
    [selectAiCommentReducer],
    (aicomment) => aicomment.aiCommentId
);

export const selectAiComments = createSelector(
    [selectAiCommentReducer],
    (aicomment) => aicomment.aicomments
);

export const selectIsAiCommentLoading = createSelector(
    [selectAiCommentReducer],
    (aicomment) => aicomment.isLoading
);

export const selectAiCommentError = createSelector(
    [selectAiCommentReducer],
    (aicomment) => aicomment.error
);