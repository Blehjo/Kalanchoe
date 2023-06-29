import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer.utils";
import { TOOL_ACTION_TYPES } from "./tool.types";

export type SetIsToolOpen = ActionWithPayload<
    TOOL_ACTION_TYPES.SET_IS_TOOL_OPEN, boolean
>;

export const setIsToolOpen = withMatcher(
    (boolean: boolean): SetIsToolOpen =>
    createAction(TOOL_ACTION_TYPES.SET_IS_TOOL_OPEN, boolean)
);