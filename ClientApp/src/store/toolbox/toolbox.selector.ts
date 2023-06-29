import { createSelector } from 'reselect';

const selectToolboxReducer = (state) => state.toolbox;

export const selectIsPanelOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsNoteOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsArtooOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsChatbotOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsSearchbarOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsEditorOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsTasksOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsResetOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsMessagesOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);

export const selectIsCommunitiesOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isToolboxOpen
);