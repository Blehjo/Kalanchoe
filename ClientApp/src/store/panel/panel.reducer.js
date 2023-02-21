import { PANEL_ACTION_TYPES } from './panel.types';

const INITIAL_STATE = {
    panels: [],
    isLoading: false,
    error: null,
};

export const panelReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case PANEL_ACTION_TYPES.CREATE_START:
        case PANEL_ACTION_TYPES.UPDATE_START:
        case PANEL_ACTION_TYPES.DELETE_START:
        case PANEL_ACTION_TYPES.FETCH_SINGLE_START:
        case PANEL_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, panels: payload, isLoading: true };
        case PANEL_ACTION_TYPES.CREATE_SUCCESS:
        case PANEL_ACTION_TYPES.UPDATE_SUCCESS:
        case PANEL_ACTION_TYPES.DELETE_SUCCESS:
        case PANEL_ACTION_TYPES.FETCH_SINGLE_SUCCESS:
        case PANEL_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, panels: payload, isLoading: false };
        case PANEL_ACTION_TYPES.CREATE_FAILED:
        case PANEL_ACTION_TYPES.UPDATE_FAILED:
        case PANEL_ACTION_TYPES.DELETE_FAILED:
        case PANEL_ACTION_TYPES.FETCH_SINGLE_FAILED:
        case PANEL_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};