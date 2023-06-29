import { TOOLBOX_ACTION_TYPES } from "./toolbox.types";

const INITIAL_STATE = {
    isPanelOpen: false,
    isNoteOpen: false,
    isArtooOpen: false,
    isChatbotOpen: false,
    isSearchbarOpen: false,
    isEditorOpen: false,
    isTasksOpen: false,
    isResetOpen: false,
    isMessagesOpen: false,
    isCommunitiesOpen: false,
};

export const toolboxReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case TOOLBOX_ACTION_TYPES.SET_IS_PANEL_OPEN:
            return {
                ...state,
                isPanelOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_NOTE_OPEN:
            return {
                ...state,
                isNoteOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_ARTOO_OPEN:
            return {
                ...state,
                isArtooOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_CHATBOT_OPEN:
            return {
                ...state,
                isChatbotOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_SEARCHBAR_OPEN:
            return {
                ...state,
                isSearchbarOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_EDITOR_OPEN:
            return {
                ...state,
                isEditorOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_TASKS_OPEN:
            return {
                ...state,
                isTasksOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_RESET_OPEN:
            return {
                ...state,
                isResetOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_MESSAGES_OPEN:
            return {
                ...state,
                isMessagesOpen: payload
            };
        case TOOLBOX_ACTION_TYPES.SET_IS_COMMUNITIES_OPEN:
            return {
                ...state,
                isCommunitiesOpen: payload
            };
        default:
            return state;
    }
};