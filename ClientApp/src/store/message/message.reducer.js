import { MESSAGE_ACTION_TYPES } from './message.types';

const INITIAL_STATE = {
    messages: [],
    isLoading: false,
    error: null,
};

export const messageReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case MESSAGE_ACTION_TYPES.CREATE_START:
        case MESSAGE_ACTION_TYPES.UPDATE_START:
        case MESSAGE_ACTION_TYPES.DELETE_START:
        case MESSAGE_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, messages: payload, isLoading: true };
        case MESSAGE_ACTION_TYPES.CREATE_SUCCESS:
        case MESSAGE_ACTION_TYPES.UPDATE_SUCCESS:
        case MESSAGE_ACTION_TYPES.DELETE_SUCCESS:
        case MESSAGE_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, messages: payload, isLoading: false };
        case MESSAGE_ACTION_TYPES.CREATE_FAILED:
        case MESSAGE_ACTION_TYPES.UPDATE_FAILED:
        case MESSAGE_ACTION_TYPES.DELETE_FAILED:
        case MESSAGE_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};