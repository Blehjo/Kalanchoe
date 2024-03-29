﻿import { createAction } from "../../utils/reducer.utils";
import { LIST_ACTION_TYPES } from './list.types';

export const setIsListOpen = (boolean) =>
    createAction(LIST_ACTION_TYPES.SET_IS_LIST_OPEN, boolean);