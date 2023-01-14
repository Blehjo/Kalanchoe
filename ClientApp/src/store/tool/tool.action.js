import { TOOL_ACTION_TYPES } from "./tool.types";


export const setIsListOpen = (boolean) =>
    createAction(TOOL_ACTION_TYPES.SET_IS_TOOL_OPEN, boolean);
