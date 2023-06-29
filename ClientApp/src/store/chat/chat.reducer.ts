import { CHAT_ACTION_TYPES } from './chat.types';

const INITIAL_STATE = {
    chats: [],
    isLoading: false,
    error: null,
};

export const chatReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHAT_ACTION_TYPES.CREATE_START:
        case CHAT_ACTION_TYPES.UPDATE_START:
        case CHAT_ACTION_TYPES.DELETE_START:
        case CHAT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, chats: payload, isLoading: true };
        case CHAT_ACTION_TYPES.CREATE_SUCCESS:
        case CHAT_ACTION_TYPES.UPDATE_SUCCESS:
        case CHAT_ACTION_TYPES.DELETE_SUCCESS:
        case CHAT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, chats: payload, isLoading: false };
        case CHAT_ACTION_TYPES.CREATE_FAILED:
        case CHAT_ACTION_TYPES.UPDATE_FAILED:
        case CHAT_ACTION_TYPES.DELETE_FAILED:
        case CHAT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};