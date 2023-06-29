import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectToolboxReducer = (state: RootState) => state.toolbox;

export const selectIsPanelOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isPanelOpen
);

export const selectIsNoteOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isNoteOpen
);

export const selectIsArtooOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isArtooOpen
);

export const selectIsChatbotOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isChatbotOpen
);

export const selectIsSearchbarOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isSearchbarOpen
);

export const selectIsEditorOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isEditorOpen
);

export const selectIsTasksOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isTasksOpen
);

export const selectIsResetOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isResetOpen
);

export const selectIsMessagesOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isMessagesOpen
);

export const selectIsCommunitiesOpen = createSelector(
    [selectToolboxReducer],
    (toolbox) => toolbox.isCommunitiesOpen
);