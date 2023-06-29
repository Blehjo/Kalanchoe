import { PROFILE_ACTION_TYPES } from "./profile.types";

const INITIAL_STATE = {
    isProfileOpen: false,
};

export const profileReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN:
            return {
                ...state,
                isProfileOpen: payload
            };
        default:
            return state;
    }
};