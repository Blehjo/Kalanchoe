import { CHANNEL_ACTION_TYPES } from './channel.types';

const INITIAL_STATE = {
    channels: [],
    isLoading: false,
    error: null,
};

export const channelReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANNEL_ACTION_TYPES.CREATE_START:
        case CHANNEL_ACTION_TYPES.UPDATE_START:
        case CHANNEL_ACTION_TYPES.DELETE_START:
        case CHANNEL_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, isLoading: true };
        case CHANNEL_ACTION_TYPES.CREATE_SUCCESS:
        case CHANNEL_ACTION_TYPES.UPDATE_SUCCESS:
        case CHANNEL_ACTION_TYPES.DELETE_SUCCESS:
        case CHANNEL_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, channels: payload, isLoading: false };
        case CHANNEL_ACTION_TYPES.CREATE_FAILED:
        case CHANNEL_ACTION_TYPES.UPDATE_FAILED:
        case CHANNEL_ACTION_TYPES.DELETE_FAILED:
        case CHANNEL_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};