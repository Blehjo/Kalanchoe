import { createSelector } from "reselect";

export const selectPanelReducer = (state) => state.panel;

export const selectPanelItems = createSelector(
    [selectPanelReducer],
    (panel) => panel.panels
);