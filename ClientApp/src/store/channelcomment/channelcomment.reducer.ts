import { CHANNELCOMMENT_ACTION_TYPES } from './channelcomment.types';

const INITIAL_STATE = {
    channelcomments: [],
    isLoading: false,
    error: null,
};

export const channelcommentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANNELCOMMENT_ACTION_TYPES.CREATE_START:
        case CHANNELCOMMENT_ACTION_TYPES.UPDATE_START:
        case CHANNELCOMMENT_ACTION_TYPES.DELETE_START:
        case CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, channelcomments: payload, isLoading: true };
        case CHANNELCOMMENT_ACTION_TYPES.CREATE_SUCCESS:
        case CHANNELCOMMENT_ACTION_TYPES.UPDATE_SUCCESS:
        case CHANNELCOMMENT_ACTION_TYPES.DELETE_SUCCESS:
        case CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, channelcomments: payload, isLoading: false };
        case CHANNELCOMMENT_ACTION_TYPES.CREATE_FAILED:
        case CHANNELCOMMENT_ACTION_TYPES.UPDATE_FAILED:
        case CHANNELCOMMENT_ACTION_TYPES.DELETE_FAILED:
        case CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};