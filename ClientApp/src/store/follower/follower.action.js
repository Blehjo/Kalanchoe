import { FOLLOWER_ACTION_TYPES } from './follower.types';
import { createAction } from '../../utils/reducer';

export const followerCreateStart = (userId, followerId) => 
    createAction(FOLLOWER_ACTION_TYPES.CREATE_START, { userId, followerId });

export const followerCreateSuccess = (follower) => 
    createAction(FOLLOWER_ACTION_TYPES.CREATE_SUCCESS, follower);

export const followerCreateFailed = (error) => 
    createAction(FOLLOWER_ACTION_TYPES.CREATE_START, error);

export const followerDeleteStart = (followerId, userId) => 
    createAction(FOLLOWER_ACTION_TYPES.DELETE_START, { followerId, userId });

export const followerDeleteSuccess = () => 
    createAction(FOLLOWER_ACTION_TYPES.DELETE_SUCCESS, 'Follower Deleted');

export const followerDeleteFailed = (error) => 
    createAction(FOLLOWER_ACTION_TYPES.DELETE_START, error);

export const followerFetchAllStart = (userId) => 
    createAction(FOLLOWER_ACTION_TYPES.FETCH_ALL_START, { userId });

export const followerFetchAllSuccess = (follower) => 
    createAction(FOLLOWER_ACTION_TYPES.FETCH_ALL_SUCCESS, follower);

export const followerFetchAllFailed = (error) => 
    createAction(FOLLOWER_ACTION_TYPES.FETCH_ALL_START, error);