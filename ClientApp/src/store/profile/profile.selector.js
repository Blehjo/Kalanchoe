import { createSelector } from 'reselect';

const selectProfileReducer = (state) => state.profile;

export const selectIsProfileOpen = createSelector(
    [selectProfileReducer],
    (profile) => profile.isProfileOpen
);