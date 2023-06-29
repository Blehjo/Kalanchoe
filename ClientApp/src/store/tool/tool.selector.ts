import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectToolReducer = (state: RootState) => state.tool;

export const selectIsToolOpen = createSelector(
    [selectToolReducer],
    (tool) => tool.isToolOpen
);