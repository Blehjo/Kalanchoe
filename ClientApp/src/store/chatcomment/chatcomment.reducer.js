import { CHATCOMMENT_ACTION_TYPES } from './chatcomment.types';

const INITIAL_STATE = {
    chatcomments: [],
    isLoading: false,
    error: null,
};

export const chatcommentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHATCOMMENT_ACTION_TYPES.CREATE_START:
        case CHATCOMMENT_ACTION_TYPES.UPDATE_START:
        case CHATCOMMENT_ACTION_TYPES.DELETE_START:
        case CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, chatcomments: payload, isLoading: true };
        case CHATCOMMENT_ACTION_TYPES.CREATE_SUCCESS:
        case CHATCOMMENT_ACTION_TYPES.UPDATE_SUCCESS:
        case CHATCOMMENT_ACTION_TYPES.DELETE_SUCCESS:
        case CHATCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, chatcomments: payload, isLoading: false };
        case CHATCOMMENT_ACTION_TYPES.CREATE_FAILED:
        case CHATCOMMENT_ACTION_TYPES.UPDATE_FAILED:
        case CHATCOMMENT_ACTION_TYPES.DELETE_FAILED:
        case CHATCOMMENT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};