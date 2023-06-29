import { MESSAGECOMMENT_ACTION_TYPES } from './messagecomment.types';

const INITIAL_STATE = {
    messagecomments: [],
    isLoading: false,
    error: null,
};

export const messagecommentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case MESSAGECOMMENT_ACTION_TYPES.CREATE_START:
        case MESSAGECOMMENT_ACTION_TYPES.UPDATE_START:
        case MESSAGECOMMENT_ACTION_TYPES.DELETE_START:
        case MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, messagecomments: payload, isLoading: true };
        case MESSAGECOMMENT_ACTION_TYPES.CREATE_SUCCESS:
        case MESSAGECOMMENT_ACTION_TYPES.UPDATE_SUCCESS:
        case MESSAGECOMMENT_ACTION_TYPES.DELETE_SUCCESS:
        case MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, messagecomments: payload, isLoading: false };
        case MESSAGECOMMENT_ACTION_TYPES.CREATE_FAILED:
        case MESSAGECOMMENT_ACTION_TYPES.UPDATE_FAILED:
        case MESSAGECOMMENT_ACTION_TYPES.DELETE_FAILED:
        case MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};