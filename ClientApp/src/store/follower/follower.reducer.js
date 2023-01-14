import { FOLLOWER_ACTION_TYPES } from './follower.types';

const INITIAL_STATE = {
    followers: [],
    isLoading: false,
    error: null,
};

export const followerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case FOLLOWER_ACTION_TYPES.CREATE_START:
        case FOLLOWER_ACTION_TYPES.UPDATE_START:
        case FOLLOWER_ACTION_TYPES.DELETE_START:
        case FOLLOWER_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case FOLLOWER_ACTION_TYPES.CREATE_SUCCESS:
        case FOLLOWER_ACTION_TYPES.UPDATE_SUCCESS:
        case FOLLOWER_ACTION_TYPES.DELETE_SUCCESS:
        case FOLLOWER_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, followers: payload, isLoading: false };
        case FOLLOWER_ACTION_TYPES.CREATE_FAILED:
        case FOLLOWER_ACTION_TYPES.UPDATE_FAILED:
        case FOLLOWER_ACTION_TYPES.DELETE_FAILED:
        case FOLLOWER_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};