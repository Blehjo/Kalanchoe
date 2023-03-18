import { AICOMMENT_ACTION_TYPES } from './aicomment.types';

const INITIAL_STATE = {
    aicomments: [],
    isLoading: false,
    error: null,
};

export const aicommentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case AICOMMENT_ACTION_TYPES.CREATE_START:
        case AICOMMENT_ACTION_TYPES.UPDATE_START:
        case AICOMMENT_ACTION_TYPES.DELETE_START:
        case AICOMMENT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, aicomments: payload, isLoading: true };
        case AICOMMENT_ACTION_TYPES.CREATE_SUCCESS:
        case AICOMMENT_ACTION_TYPES.UPDATE_SUCCESS:
        case AICOMMENT_ACTION_TYPES.DELETE_SUCCESS:
        case AICOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, aicomments: payload, isLoading: false };
        case AICOMMENT_ACTION_TYPES.CREATE_FAILED:
        case AICOMMENT_ACTION_TYPES.UPDATE_FAILED:
        case AICOMMENT_ACTION_TYPES.DELETE_FAILED:
        case AICOMMENT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};