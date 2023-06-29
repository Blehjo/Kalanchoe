import { createAction } from "../../utils/reducer.utils";
import { TOOL_ACTION_TYPES } from "./tool.types";

export const setIsToolOpen = (boolean) =>
    createAction(TOOL_ACTION_TYPES.SET_IS_TOOL_OPEN, boolean);