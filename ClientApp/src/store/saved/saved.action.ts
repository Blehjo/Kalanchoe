import { createAction } from '../../utils/reducer.utils';
import { SAVED_ACTION_TYPES } from './saved.types';

export const savedCreateStart = (userId, title, link) => 
    createAction(SAVED_ACTION_TYPES.CREATE_START, { userId, title, link });

export const savedCreateSuccess = (saved) => 
    createAction(SAVED_ACTION_TYPES.CREATE_SUCCESS, saved);

export const savedCreateFailed = (error) => 
    createAction(SAVED_ACTION_TYPES.CREATE_START, error);
    
export const savedUpdateStart = (userId, savedId, title, link) => 
    createAction(SAVED_ACTION_TYPES.UPDATE_START, { userId, savedId, title, link });

export const savedUpdateSuccess = (saved) => 
    createAction(SAVED_ACTION_TYPES.UPDATE_SUCCESS, saved);

export const savedUpdateFailed = (error) => 
    createAction(SAVED_ACTION_TYPES.UPDATE_START, error);

export const savedDeleteStart = (userId, savedId) => 
    createAction(SAVED_ACTION_TYPES.DELETE_START, { userId, savedId });

export const savedDeleteSuccess = () => 
    createAction(SAVED_ACTION_TYPES.DELETE_SUCCESS, 'Saved Deleted');

export const savedDeleteFailed = (error) => 
    createAction(SAVED_ACTION_TYPES.DELETE_START, error);

export const savedFetchSingleStart = (userId) => 
    createAction(SAVED_ACTION_TYPES.FETCH_SINGLE_START, userId);

export const savedFetchSingleSuccess = (saved) => 
    createAction(SAVED_ACTION_TYPES.FETCH_SINGLE_SUCCESS, saved);

export const savedFetchSingleFailed = (error) => 
    createAction(SAVED_ACTION_TYPES.FETCH_SINGLE_FAILED, error);

export const savedFetchAllStart = (userId) => 
    createAction(SAVED_ACTION_TYPES.FETCH_ALL_START, userId);

export const savedFetchAllSuccess = (saved) => 
    createAction(SAVED_ACTION_TYPES.FETCH_ALL_SUCCESS, saved);

export const savedFetchAllFailed = (error) => 
    createAction(SAVED_ACTION_TYPES.FETCH_ALL_FAILED, error);