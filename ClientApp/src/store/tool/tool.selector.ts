import { createSelector } from 'reselect';

const selectToolReducer = (state) => state.tool;

export const selectIsToolOpen = createSelector(
    [selectToolReducer],
    (tool) => tool.isToolOpen
);