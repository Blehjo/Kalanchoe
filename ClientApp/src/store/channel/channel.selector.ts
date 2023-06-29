import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectChannelReducer = (state: RootState) => state.channel;

export const selectChannelId = createSelector(
    [selectChannelReducer],
    (channel) => channel.channelId
);

export const selectSingleChannel = createSelector(
    [selectChannelReducer],
    (channel) => channel.singleChannel
);

export const selectChannels = createSelector(
    [selectChannelReducer],
    (channel) => channel.channels
);

export const selectIsChannelLoading = createSelector(
    [selectChannelReducer],
    (channel) => channel.isLoading
);

export const selectChannelError = createSelector(
    [selectChannelReducer],
    (channel) => channel.error
);