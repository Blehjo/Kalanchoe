import { createAction } from '../../utils/reducer.utils';
import { CHANNELCOMMENT_ACTION_TYPES } from './channelcomment.types';

export const channelcommentCreateStart = (channelId, userId, channelcommentValue) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.CREATE_START, { channelId, userId, channelcommentValue });

export const channelcommentCreateSuccess = (channelcomment) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.CREATE_SUCCESS, channelcomment);

export const channelcommentCreateFailed = (error) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.CREATE_START, error);
    
export const channelcommentUpdateStart = (channelcommentId, channelId, userId, channelcommentValue) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.UPDATE_START, { channelcommentId, channelId, userId, channelcommentValue });

export const channelcommentUpdateSuccess = (channelcomment) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.UPDATE_SUCCESS, channelcomment);

export const channelcommentUpdateFailed = (error) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.UPDATE_START, error);

export const channelcommentDeleteStart = (channelcommentId, channelId, userId) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.DELETE_START, { channelcommentId, channelId, userId });

export const channelcommentDeleteSuccess = () => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.DELETE_SUCCESS, 'Channel Comment Deleted');

export const channelcommentDeleteFailed = (error) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.DELETE_START, error);

export const channelcommentFetchAllStart = (userId) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_START, userId);

export const channelcommentFetchAllSuccess = (channelcomment) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, channelcomment);

export const channelcommentFetchAllFailed = (error) => 
    createAction(CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_START, error);