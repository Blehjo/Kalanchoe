import { createSelector } from 'reselect';

export const selectSavedReducer = (state) => state.saved;

export const selectSaved = createSelector(
    [selectSavedReducer],
    (saved) => saved.saved
);

export const selectSinglesaved = createSelector(
    [selectSavedReducer],
    (saved) => saved.singleSaved
);

export const selectSavedIsLoading = createSelector(
    [selectSavedReducer],
    (saved) => saved.isLoading
);