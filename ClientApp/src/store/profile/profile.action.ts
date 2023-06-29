import {
    ActionWithPayload,
    createAction,
    withMatcher,
} from '../../utils/reducer.utils';
import { PROFILE_ACTION_TYPES } from './profile.types';

export type SetIsProfileOpen = ActionWithPayload<
  PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN,
  boolean
>;

export const setIsProfileOpen = withMatcher(
  (boolean: boolean): SetIsProfileOpen =>
    createAction(PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN, boolean)
);
