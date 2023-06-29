import { USERPROFILE_ACTION_TYPES } from './userprofile.types';

const INITIAL_STATE = {
    userprofiles: [],
    userprofileId: null,
    isLoading: false,
    error: null,
};

export const userprofileReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USERPROFILE_ACTION_TYPES.FETCH_ID_START:
            return { ...state, userprofileId: payload, isLoading: true };
        case USERPROFILE_ACTION_TYPES.CREATE_START:
        case USERPROFILE_ACTION_TYPES.UPDATE_START:
        case USERPROFILE_ACTION_TYPES.DELETE_START:
        case USERPROFILE_ACTION_TYPES.FETCH_SINGLE_START:
        case USERPROFILE_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, userprofiles: payload, isLoading: true };
        case USERPROFILE_ACTION_TYPES.CREATE_SUCCESS:
        case USERPROFILE_ACTION_TYPES.UPDATE_SUCCESS:
        case USERPROFILE_ACTION_TYPES.DELETE_SUCCESS:
        case USERPROFILE_ACTION_TYPES.FETCH_SINGLE_SUCCESS:
        case USERPROFILE_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, userprofiles: payload, isLoading: false };
        case USERPROFILE_ACTION_TYPES.CREATE_FAILED:
        case USERPROFILE_ACTION_TYPES.UPDATE_FAILED:
        case USERPROFILE_ACTION_TYPES.DELETE_FAILED:
        case USERPROFILE_ACTION_TYPES.FETCH_SINGLE_FAILED:
        case USERPROFILE_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};