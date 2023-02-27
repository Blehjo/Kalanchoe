import { COMMUNITY_ACTION_TYPES } from './community.types';

const INITIAL_STATE = {
    communities: [],
    isLoading: false,
    error: null,
};

export const communityReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case COMMUNITY_ACTION_TYPES.CREATE_START:
        case COMMUNITY_ACTION_TYPES.UPDATE_START:
        case COMMUNITY_ACTION_TYPES.DELETE_START:
        case COMMUNITY_ACTION_TYPES.FETCH_SINGLE_START:
        case COMMUNITY_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, communities: payload, isLoading: true };
        case COMMUNITY_ACTION_TYPES.CREATE_SUCCESS:
        case COMMUNITY_ACTION_TYPES.UPDATE_SUCCESS:
        case COMMUNITY_ACTION_TYPES.DELETE_SUCCESS:
        case COMMUNITY_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, communities: payload, isLoading: false };
        case COMMUNITY_ACTION_TYPES.CREATE_FAILED:
        case COMMUNITY_ACTION_TYPES.UPDATE_FAILED:
        case COMMUNITY_ACTION_TYPES.DELETE_FAILED:
        case COMMUNITY_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};