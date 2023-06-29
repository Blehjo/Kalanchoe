import { MEMBER_ACTION_TYPES } from './member.types';

const INITIAL_STATE = {
    members: [],
    isLoading: false,
    error: null,
};

export const memberReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case MEMBER_ACTION_TYPES.CREATE_START:
        case MEMBER_ACTION_TYPES.UPDATE_START:
        case MEMBER_ACTION_TYPES.DELETE_START:
        case MEMBER_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case MEMBER_ACTION_TYPES.CREATE_SUCCESS:
        case MEMBER_ACTION_TYPES.UPDATE_SUCCESS:
        case MEMBER_ACTION_TYPES.DELETE_SUCCESS:
        case MEMBER_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, members: payload, isLoading: false };
        case MEMBER_ACTION_TYPES.CREATE_FAILED:
        case MEMBER_ACTION_TYPES.UPDATE_FAILED:
        case MEMBER_ACTION_TYPES.DELETE_FAILED:
        case MEMBER_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};