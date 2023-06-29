import { AnyAction } from "redux";
import { TOOLBOX_ACTION_TYPES } from "./toolbox.types";
import { setIsArtooOpen, setIsChatbotOpen, setIsCommunitiesOpen, setIsEditorOpen, setIsMessagesOpen, setIsNoteOpen, setIsPanelOpen, setIsResetOpen, setIsSearchbarOpen, setIsTasksOpen } from "./toolbox.action";

export type ToolboxState = {
    readonly isPanelOpen: boolean;
    readonly isNoteOpen: boolean;
    readonly isArtooOpen: boolean;
    readonly isChatbotOpen: boolean;
    readonly isSearchbarOpen: boolean;
    readonly isEditorOpen: boolean;
    readonly isTasksOpen: boolean;
    readonly isResetOpen: boolean;
    readonly isMessagesOpen: boolean;
    readonly isCommunitiesOpen: boolean;
}

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
    isCommunitiesOpen: false
};

export const toolboxReducer = (
    state = INITIAL_STATE, action: AnyAction
): ToolboxState => {
    if (
        setIsPanelOpen.match(action)
    ) { 
        return { ...state, isPanelOpen: action.payload}
    } 
    if (
        setIsNoteOpen.match(action)
    ) { 
        return { ...state, isNoteOpen: action.payload}
    } 
    if (
        setIsArtooOpen.match(action)
    ) { 
        return { ...state, isArtooOpen: action.payload}
    } 
    if (
        setIsChatbotOpen.match(action)
    ) { 
        return { ...state, isChatbotOpen: action.payload}
    } 
    if (
        setIsSearchbarOpen.match(action)
    ) { 
        return { ...state, isSearchbarOpen: action.payload}
    } 
    if (
        setIsEditorOpen.match(action)
    ) { 
        return { ...state, isEditorOpen: action.payload}
    } 
    if (
        setIsTasksOpen.match(action)
    ) { 
        return { ...state, isTasksOpen: action.payload}
    } 
    if (
        setIsResetOpen.match(action)
    ) { 
        return { ...state, isResetOpen: action.payload}
    } 
    if (
        setIsMessagesOpen.match(action)
    ) { 
        return { ...state, isMessagesOpen: action.payload}
    } 
    if (
        setIsCommunitiesOpen.match(action)
    ) { 
        return { ...state, isCommunitiesOpen: action.payload}
    } 

    return state;
}