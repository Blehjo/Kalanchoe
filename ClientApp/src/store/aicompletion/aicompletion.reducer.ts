import { AICOMPLETION_ACTION_TYPES } from './aicompletion.types';

const INITIAL_STATE = {
    aicompletions: [],
    isLoading: false,
    error: null,
};

export const aicompletionReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case AICOMPLETION_ACTION_TYPES.CREATE_START:
        case AICOMPLETION_ACTION_TYPES.UPDATE_START:
        case AICOMPLETION_ACTION_TYPES.DELETE_START:
        case AICOMPLETION_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case AICOMPLETION_ACTION_TYPES.CREATE_SUCCESS:
        case AICOMPLETION_ACTION_TYPES.UPDATE_SUCCESS:
        case AICOMPLETION_ACTION_TYPES.DELETE_SUCCESS:
        case AICOMPLETION_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, aicompletions: payload, isLoading: false };
        case AICOMPLETION_ACTION_TYPES.CREATE_FAILED:
        case AICOMPLETION_ACTION_TYPES.UPDATE_FAILED:
        case AICOMPLETION_ACTION_TYPES.DELETE_FAILED:
        case AICOMPLETION_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};