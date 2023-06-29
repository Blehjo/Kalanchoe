import { createSelector } from 'reselect';

export const selectChannelcommentReducer = (state) => state.channelcomment;

export const selectChannelcommentItems = createSelector(
    [selectChannelcommentReducer],
    (channelcomment) => channelcomment.channelcomments
);