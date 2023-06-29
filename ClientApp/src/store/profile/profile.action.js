import { createAction } from "../../utils/reducer.utils";
import { PROFILE_ACTION_TYPES } from "./profile.types";

export const setIsProfileOpen = (boolean) =>
    createAction(PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN, boolean);