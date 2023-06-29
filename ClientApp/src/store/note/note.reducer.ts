import { NOTE_ACTION_TYPES } from './note.types';

const INITIAL_STATE = {
    notes: [],
    isLoading: false,
    error: null,
};

export const noteReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case NOTE_ACTION_TYPES.CREATE_START:
        case NOTE_ACTION_TYPES.UPDATE_START:
        case NOTE_ACTION_TYPES.DELETE_START:
        case NOTE_ACTION_TYPES.FETCH_ALL_START:
            return { ...state, notes: payload, isLoading: true };
        case NOTE_ACTION_TYPES.CREATE_SUCCESS:
        case NOTE_ACTION_TYPES.UPDATE_SUCCESS:
        case NOTE_ACTION_TYPES.DELETE_SUCCESS:
        case NOTE_ACTION_TYPES.FETCH_ALL_SUCCESS:
            return { ...state, notes: payload, isLoading: false };
        case NOTE_ACTION_TYPES.CREATE_FAILED:
        case NOTE_ACTION_TYPES.UPDATE_FAILED:
        case NOTE_ACTION_TYPES.DELETE_FAILED:
        case NOTE_ACTION_TYPES.FETCH_ALL_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};