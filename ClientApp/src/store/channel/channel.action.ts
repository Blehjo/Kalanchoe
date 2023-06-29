import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer.utils';
import { CHANNEL_ACTION_TYPES, Channel } from './channel.types';

export type ChannelCreateStart = ActionWithPayload<
    CHANNEL_ACTION_TYPES.CREATE_START, { description: string, communityId: number }
>;

export type ChannelCreateSuccess = ActionWithPayload<
    CHANNEL_ACTION_TYPES.CREATE_SUCCESS, Channel[]
>;

export type ChannelCreateFailed = ActionWithPayload<
    CHANNEL_ACTION_TYPES.CREATE_FAILED, Error
>;

export type ChannelUpdateStart = ActionWithPayload<
    CHANNEL_ACTION_TYPES.UPDATE_START, { channelId: number, description: string, communityId: number }
>;

export type ChannelUpdateSuccess = ActionWithPayload<
    CHANNEL_ACTION_TYPES.UPDATE_SUCCESS, Channel[]
>;

export type ChannelUpdateFailed = ActionWithPayload<
    CHANNEL_ACTION_TYPES.UPDATE_FAILED, Error
>;

export type ChannelDeleteStart = ActionWithPayload<
    CHANNEL_ACTION_TYPES.DELETE_START, { channelId: number }
>;

export type ChannelDeleteSuccess = ActionWithPayload<
    CHANNEL_ACTION_TYPES.DELETE_SUCCESS, Channel[]
>;

export type ChannelDeleteFailed = ActionWithPayload<
    CHANNEL_ACTION_TYPES.DELETE_FAILED, Error
>;

export type ChannelFetchAllStart = ActionWithPayload<
    CHANNEL_ACTION_TYPES.FETCH_ALL_START, { communityId: number }
>;

export type ChannelFetchAllSuccess = ActionWithPayload<
    CHANNEL_ACTION_TYPES.FETCH_ALL_SUCCESS, Channel[]
>;

export type ChannelFetchAllFailed = ActionWithPayload<
    CHANNEL_ACTION_TYPES.FETCH_ALL_FAILED, Error
>;

export const channelCreateStart = withMatcher(
    (communityId: number, description: string): ChannelCreateStart => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_START, { communityId, description })
);

export const channelCreateSuccess = withMatcher(
    (channels: Channel[]): ChannelCreateSuccess => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_SUCCESS, channels)
);

export const channelCreateFailed = withMatcher(
    (error: Error): ChannelCreateFailed => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_FAILED, error)
);
    
export const channelUpdateStart = withMatcher(
    (channelId: number, communityId: number, description: string): ChannelUpdateStart => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_START, { channelId, communityId, description })
);

export const channelUpdateSuccess = withMatcher(
    (channels: Channel[]): ChannelUpdateSuccess => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_SUCCESS, channels)
);

export const channelUpdateFailed = withMatcher(
    (error: Error): ChannelUpdateFailed => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_FAILED, error)
);

export const channelDeleteStart = withMatcher(
    (channelId: number, communityId: number): ChannelDeleteStart => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_START, { channelId, communityId })
);

export const channelDeleteSuccess = withMatcher(
    (channels: Channel[]): ChannelDeleteSuccess => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_SUCCESS, channels)
);

export const channelDeleteFailed = withMatcher(
    (error: Error): ChannelDeleteFailed => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_FAILED, error)
);

export const channelFetchAllStart = withMatcher(
    (communityId: number): ChannelFetchAllStart => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_START, { communityId })
);

export const channelFetchAllSuccess = withMatcher(
    (channels: Channel[]): ChannelFetchAllSuccess => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_SUCCESS, channels)
);

export const channelFetchAllFailed = withMatcher(
    (error: Error): ChannelFetchAllFailed => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_FAILED, error)
);