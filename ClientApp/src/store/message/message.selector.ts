import { createSelector } from 'reselect';

export const selectMessageReducer = (state) => state.message;

export const selectMessageItems = createSelector(
    [selectMessageReducer],
    (message) => message.messages
);