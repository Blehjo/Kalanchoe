import { createSelector } from 'reselect';

const selectListReducer = (state) => state.list;

export const selectIsListOpen = createSelector(
    [selectListReducer],
    (list) => list.isListOpen
);