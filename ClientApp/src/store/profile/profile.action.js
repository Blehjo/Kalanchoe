import { createAction } from "../../utils/reducer";
import { PROFILE_ACTION_TYPES } from "./profile.types";

export const setIsPROFILEOpen = (boolean) =>
    createAction(PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN, boolean);