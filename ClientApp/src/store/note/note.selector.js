import { createSelector } from "reselect";

export const selectNoteReducer = (state) => state.note;

export const selectNoteItems = createSelector(
    [selectNoteReducer],
    (note) => note.notes
);