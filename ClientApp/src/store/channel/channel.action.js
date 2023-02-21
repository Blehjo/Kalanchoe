import { CHANNEL_ACTION_TYPES } from './channel.types';
import { createAction } from '../../utils/reducer';

export const channelCreateStart = (communityId, description) => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_START, { communityId, description });

export const channelCreateSuccess = (channel) => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_SUCCESS, channel);

export const channelCreateFailed = (error) => 
    createAction(CHANNEL_ACTION_TYPES.CREATE_START, error);
    
export const channelUpdateStart = (channelId, communityId, description) => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_START, { channelId, communityId, description });

export const channelUpdateSuccess = (channel) => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_SUCCESS, channel);

export const channelUpdateFailed = (error) => 
    createAction(CHANNEL_ACTION_TYPES.UPDATE_START, error);

export const channelDeleteStart = (channelId, communityId) => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_START, { channelId, communityId });

export const channelDeleteSuccess = () => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_SUCCESS, 'Channel Deleted');

export const channelDeleteFailed = (error) => 
    createAction(CHANNEL_ACTION_TYPES.DELETE_START, error);

export const channelFetchAllStart = (userId) => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_START, userId);

export const channelFetchAllSuccess = (channel) => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_SUCCESS, channel);

export const channelFetchAllFailed = (error) => 
    createAction(CHANNEL_ACTION_TYPES.FETCH_ALL_START, error);