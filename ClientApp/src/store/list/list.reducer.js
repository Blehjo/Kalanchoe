import { LIST_ACTION_TYPES } from "./list.types";

const INITIAL_STATE = {
    isListOpen: false,
};

export const listReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case LIST_ACTION_TYPES.SET_IS_LIST_OPEN:
            return {
                ...state,
                isListOpen: payload
            };
        default:
            return state;
    }
}; 