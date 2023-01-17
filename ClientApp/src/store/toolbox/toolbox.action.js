import { createAction } from "../../utils/reducer";
import { TOOLBOX_ACTION_TYPES } from "./toolbox.types";

export const setIsPanelOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_PANEL_OPEN, boolean);

export const setIsNoteOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_NOTE_OPEN, boolean);

export const setIsArtooOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_ARTOO_OPEN, boolean);

export const setIsChatbotOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_CHATBOT_OPEN, boolean);

export const setIsSearchbarOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_SEARCHBAR_OPEN, boolean);

export const setIsEditorOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_EDITOR_OPEN, boolean);

export const setIsTasksOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_TASKS_OPEN, boolean);

export const setIsResetOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_RESET_OPEN, boolean);

export const setIsMessagesOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_MESSAGES_OPEN, boolean);

export const setIsCommunitiesOpen = (boolean) =>
    createAction(TOOLBOX_ACTION_TYPES.SET_IS_COMMUNITIES_OPEN, boolean);