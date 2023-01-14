import { POST_ACTION_TYPES } from './post.types';
import { createAction } from '../../utils/reducer';

export const postCreateStart = (userId, postValue) => 
    createAction(POST_ACTION_TYPES.CREATE_START, { userId, postValue });

export const postCreateSuccess = (post) => 
    createAction(POST_ACTION_TYPES.CREATE_SUCCESS, post);

export const postCreateFailed = (error) => 
    createAction(POST_ACTION_TYPES.CREATE_START, error);
    
export const postUpdateStart = (userId, postId, postValue) => 
    createAction(POST_ACTION_TYPES.UPDATE_START, { userId, postId, postValue });

export const postUpdateSuccess = (post) => 
    createAction(POST_ACTION_TYPES.UPDATE_SUCCESS, post);

export const postUpdateFailed = (error) => 
    createAction(POST_ACTION_TYPES.UPDATE_START, error);

export const postDeleteStart = (userId, postId, postValue) => 
    createAction(POST_ACTION_TYPES.DELETE_START, { userId, postId, postValue });

export const postDeleteSuccess = () => 
    createAction(POST_ACTION_TYPES.DELETE_SUCCESS, 'Post Deleted');

export const postDeleteFailed = (error) => 
    createAction(POST_ACTION_TYPES.DELETE_START, error);

export const postFetchAllStart = (userId) => 
    createAction(POST_ACTION_TYPES.FETCH_ALL_START, { userId });

export const postFetchAllSuccess = (post) => 
    createAction(POST_ACTION_TYPES.FETCH_ALL_SUCCESS, post);

export const postFetchAllFailed = (error) => 
    createAction(POST_ACTION_TYPES.FETCH_ALL_FAILED, error);