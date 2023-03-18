import { AICOMMENT_ACTION_TYPES } from './aicomment.types';
import { createAction } from '../../utils/reducer';

export const aicommentCreateStart = (chatId, commentValue) => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_START, { chatId, commentValue });

export const aicommentCreateSuccess = (aicomment) => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_SUCCESS, aicomment);

export const aicommentCreateFailed = (error) => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_START, error);

export const aicommentDeleteStart = (aicommentId, chatId) => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_START, { aicommentId, chatId });

export const aicommentDeleteSuccess = () => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_SUCCESS, 'aicomment Deleted');

export const aicommentDeleteFailed = (error) => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_START, error);

export const aicommentFetchAllStart = (chatId) => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_START, chatId );

export const aicommentFetchAllSuccess = (aicomment) => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, aicomment);

export const aicommentFetchAllFailed = (error) => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_START, error);