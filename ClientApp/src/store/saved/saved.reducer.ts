import { SAVED_ACTION_TYPES } from './saved.types';

const INITIAL_STATE = {
    saved: [],
    singleSaved: {},
    isLoading: false,
    error: null,
};

export const savedReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SAVED_ACTION_TYPES.FETCH_SINGLE_START:
            return { ...state, singleSaved: payload, isLoading: true };
        case SAVED_ACTION_TYPES.CREATE_START:
        case SAVED_ACTION_TYPES.UPDATE_START:
        case SAVED_ACTION_TYPES.DELETE_START:
        case SAVED_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, saved: payload, isLoading: true };
        case SAVED_ACTION_TYPES.CREATE_SUCCESS:
        case SAVED_ACTION_TYPES.UPDATE_SUCCESS:
        case SAVED_ACTION_TYPES.DELETE_SUCCESS:
        case SAVED_ACTION_TYPES.FETCH_SINGLE_SUCCESS:
        case SAVED_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, isLoading: false };
        case SAVED_ACTION_TYPES.CREATE_FAILED:
        case SAVED_ACTION_TYPES.UPDATE_FAILED:
        case SAVED_ACTION_TYPES.DELETE_FAILED:
        case SAVED_ACTION_TYPES.FETCH_SINGLE_FAILED:
        case SAVED_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};