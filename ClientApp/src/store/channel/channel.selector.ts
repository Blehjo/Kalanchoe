import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectChannelReducer = (state: RootState) => state.channel;

export const selectChannelItems = createSelector(
    [selectChannelReducer],
    (channel) => channel.channels
);