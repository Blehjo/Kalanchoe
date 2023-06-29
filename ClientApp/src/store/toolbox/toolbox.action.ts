import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer.utils";
import { TOOLBOX_ACTION_TYPES } from "./toolbox.types";

export type SetIsPanelOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_PANEL_OPEN, boolean
>;

export type SetIsNoteOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_NOTE_OPEN, boolean
>;

export type SetIsArtooOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_ARTOO_OPEN, boolean
>;

export type SetIsChatbotOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_CHATBOT_OPEN, boolean
>;

export type SetIsSearchbarOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_SEARCHBAR_OPEN, boolean
>;

export type SetIsEditorOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_EDITOR_OPEN, boolean
>;

export type SetIsTasksOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_TASKS_OPEN, boolean
>;

export type SetIsResetOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_RESET_OPEN, boolean
>;

export type SetIsMessagesOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_MESSAGES_OPEN, boolean
>;

export type SetIsCommunitiesOpen = ActionWithPayload<
    TOOLBOX_ACTION_TYPES.SET_IS_COMMUNITIES_OPEN, boolean
>;

export const setIsPanelOpen = withMatcher(
    (boolean: boolean): SetIsPanelOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_PANEL_OPEN, boolean)
);

export const setIsNoteOpen = withMatcher(
    (boolean: boolean): SetIsNoteOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_NOTE_OPEN, boolean)
);

export const setIsArtooOpen = withMatcher(
    (boolean: boolean): SetIsArtooOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_ARTOO_OPEN, boolean)
);

export const setIsChatbotOpen = withMatcher(
    (boolean: boolean): SetIsChatbotOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_CHATBOT_OPEN, boolean)
);

export const setIsSearchbarOpen = withMatcher(
    (boolean: boolean): SetIsSearchbarOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_SEARCHBAR_OPEN, boolean)
);

export const setIsEditorOpen = withMatcher(
    (boolean: boolean): SetIsEditorOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_EDITOR_OPEN, boolean)
);

export const setIsTasksOpen = withMatcher(
    (boolean: boolean): SetIsTasksOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_TASKS_OPEN, boolean)
);

export const setIsResetOpen = withMatcher(
    (boolean: boolean): SetIsResetOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_RESET_OPEN, boolean)
);

export const setIsMessagesOpen = withMatcher(
    (boolean: boolean): SetIsMessagesOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_MESSAGES_OPEN, boolean)
);

export const setIsCommunitiesOpen = withMatcher(
    (boolean: boolean): SetIsCommunitiesOpen =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_COMMUNITIES_OPEN, boolean)
);