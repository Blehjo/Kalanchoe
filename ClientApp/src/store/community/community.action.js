import { COMMUNITY_ACTION_TYPES } from './community.types';
import { createAction } from '../../utils/reducer';

export const communityCreateStart = (userId, groupName, description) => 
    createAction(COMMUNITY_ACTION_TYPES.CREATE_START, { userId, groupName, description });

export const communityCreateSuccess = (community) => 
    createAction(COMMUNITY_ACTION_TYPES.CREATE_SUCCESS, community);

export const communityCreateFailed = (error) => 
    createAction(COMMUNITY_ACTION_TYPES.CREATE_START, error);
    
export const communityUpdateStart = (communityId, userId, groupName, description) => 
    createAction(COMMUNITY_ACTION_TYPES.UPDATE_START, { communityId, userId, groupName, description });

export const communityUpdateSuccess = (community) => 
    createAction(COMMUNITY_ACTION_TYPES.UPDATE_SUCCESS, community);

export const communityUpdateFailed = (error) => 
    createAction(COMMUNITY_ACTION_TYPES.UPDATE_START, error);

export const communityDeleteStart = (communityId, userId) => 
    createAction(COMMUNITY_ACTION_TYPES.DELETE_START, { communityId, userId });

export const communityDeleteSuccess = () => 
    createAction(COMMUNITY_ACTION_TYPES.DELETE_SUCCESS, 'Community Deleted');

export const communityDeleteFailed = (error) => 
    createAction(COMMUNITY_ACTION_TYPES.DELETE_START, error);