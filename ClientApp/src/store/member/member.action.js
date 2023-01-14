import { MEMBER_ACTION_TYPES } from './member.types';
import { createAction } from '../../utils/reducer';

export const memberCreateStart = (communityId, userId, memberValue) => 
    createAction(MEMBER_ACTION_TYPES.CREATE_START, { communityId, userId, memberValue });

export const memberCreateSuccess = (member) => 
    createAction(MEMBER_ACTION_TYPES.CREATE_SUCCESS, member);

export const memberCreateFailed = (error) => 
    createAction(MEMBER_ACTION_TYPES.CREATE_START, error);
    
export const memberUpdateStart = (memberId, communityId, userId, memberValue) => 
    createAction(MEMBER_ACTION_TYPES.UPDATE_START, { memberId, communityId, userId, memberValue });

export const memberUpdateSuccess = (member) => 
    createAction(MEMBER_ACTION_TYPES.UPDATE_SUCCESS, member);

export const memberUpdateFailed = (error) => 
    createAction(MEMBER_ACTION_TYPES.UPDATE_START, error);

export const memberDeleteStart = (memberId, communityId, userId) => 
    createAction(MEMBER_ACTION_TYPES.DELETE_START, { memberId, communityId, userId });

export const memberDeleteSuccess = () => 
    createAction(MEMBER_ACTION_TYPES.DELETE_SUCCESS, 'Member Deleted');

export const memberDeleteFailed = (error) => 
    createAction(MEMBER_ACTION_TYPES.DELETE_START, error);