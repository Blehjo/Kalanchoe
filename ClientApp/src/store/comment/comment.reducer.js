import { COMMENT_ACTION_TYPES } from './comment.types';

const INITIAL_STATE = {
    comments: [],
    isLoading: false,
    error: null,
};

export const commentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case COMMENT_ACTION_TYPES.CREATE_START:
        case COMMENT_ACTION_TYPES.UPDATE_START:
        case COMMENT_ACTION_TYPES.DELETE_START:
        case COMMENT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case COMMENT_ACTION_TYPES.CREATE_SUCCESS:
        case COMMENT_ACTION_TYPES.UPDATE_SUCCESS:
        case COMMENT_ACTION_TYPES.DELETE_SUCCESS:
        case COMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, comments: payload, isLoading: false };
        case COMMENT_ACTION_TYPES.CREATE_FAILED:
        case COMMENT_ACTION_TYPES.UPDATE_FAILED:
        case COMMENT_ACTION_TYPES.DELETE_FAILED:
        case COMMENT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};