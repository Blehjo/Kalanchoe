import { createSelector } from "reselect";

export const selectPanelReducer = (state) => state.panel;

export const selectPanelItems = createSelector(
    [selectPanelReducer],
    (panel) => panel.panels
);

export const selectUserPanelItems = createSelector(
    [selectPanelReducer],
    (panel) => panel.userPanels
);