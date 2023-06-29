import { createSelector } from "reselect";

export const selectUserprofileReducer = (state) => state.userprofile;

export const selectUserprofileItems = createSelector(
    [selectUserprofileReducer],
    (userprofile) => userprofile.userprofiles
);

export const selectUserprofileId = createSelector(
    [selectUserprofileReducer],
    (userprofile) => userprofile.userprofileId
);