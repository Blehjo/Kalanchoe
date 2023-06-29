import { createSelector } from 'reselect';

export const selectCommunityReducer = (state) => state.community;

export const selectCommunities = createSelector(
    [selectCommunityReducer],
    (community) => community.communities
);