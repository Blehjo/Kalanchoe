import { TOOL_ACTION_TYPES } from "./tool.types";


const INITIAL_STATE = {
    isToolOpen: false,
};

export const listReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case: TOOL_ACTION_TYPES.SET_IS_TOOL_OPEN:
            return {
                ...state,
                isNavOpen: payload
            };
        default:
            return state;
    }
} 
