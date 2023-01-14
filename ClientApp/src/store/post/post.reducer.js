import { POST_ACTION_TYPES } from './post.types';

const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case POST_ACTION_TYPES.CREATE_START:
        case POST_ACTION_TYPES.UPDATE_START:
        case POST_ACTION_TYPES.DELETE_START:
        case POST_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case POST_ACTION_TYPES.CREATE_SUCCESS:
        case POST_ACTION_TYPES.UPDATE_SUCCESS:
        case POST_ACTION_TYPES.DELETE_SUCCESS:
        case POST_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, posts: payload, isLoading: false };
        case POST_ACTION_TYPES.CREATE_FAILED:
        case POST_ACTION_TYPES.UPDATE_FAILED:
        case POST_ACTION_TYPES.DELETE_FAILED:
        case POST_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};