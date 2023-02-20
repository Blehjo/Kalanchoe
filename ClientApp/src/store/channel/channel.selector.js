import { createSelector } from 'reselect';

export const selectChannelReducer = (state) => state.channel;

export const selectChannelItems = createSelector(
    [selectChannelReducer],
    (channel) => channel.channels
);