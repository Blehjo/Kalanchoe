import { USERPROFILE_ACTION_TYPES } from './userprofile.types';
import { createAction } from '../../utils/reducer';

export const userprofileCreateStart = (userId, title) => 
    createAction(USERPROFILE_ACTION_TYPES.CREATE_START, { userId, title });

export const userprofileCreateSuccess = (userprofile) => 
    createAction(USERPROFILE_ACTION_TYPES.CREATE_SUCCESS, userprofile);

export const userprofileCreateFailed = (error) => 
    createAction(USERPROFILE_ACTION_TYPES.CREATE_START, error);
    
export const userprofileUpdateStart = (userId, userprofileId, title) => 
    createAction(USERPROFILE_ACTION_TYPES.UPDATE_START, { userId, userprofileId, title });

export const userprofileUpdateSuccess = (userprofile) => 
    createAction(USERPROFILE_ACTION_TYPES.UPDATE_SUCCESS, userprofile);

export const userprofileUpdateFailed = (error) => 
    createAction(USERPROFILE_ACTION_TYPES.UPDATE_START, error);

export const userprofileDeleteStart = (userId, userprofileId) => 
    createAction(USERPROFILE_ACTION_TYPES.DELETE_START, { userId, userprofileId });

export const userprofileDeleteSuccess = () => 
    createAction(USERPROFILE_ACTION_TYPES.DELETE_SUCCESS, 'userprofile Deleted');

export const userprofileDeleteFailed = (error) => 
    createAction(USERPROFILE_ACTION_TYPES.DELETE_START, error);

export const userprofileFetchSingleId = (userId) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_ID_START, userId);

export const userprofileFetchSingleStart = (userId) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_SINGLE_START, userId);

export const userprofileFetchSingleSuccess = (userprofile) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_SINGLE_SUCCESS, userprofile);

export const userprofileFetchSingleFailed = (error) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_SINGLE_START, error);

export const userprofileFetchAllStart = (userId) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_ALL_START, userId);

export const userprofileFetchAllSuccess = (userprofile) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_ALL_SUCCESS, userprofile);

export const userprofileFetchAllFailed = (error) => 
    createAction(USERPROFILE_ACTION_TYPES.FETCH_ALL_START, error);