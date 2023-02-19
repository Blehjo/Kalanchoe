import { CHATCOMMENT_ACTION_TYPES } from './chatcomment.types';
import { createAction } from '../../utils/reducer';

export const chatcommentCreateStart = (chatId, chatValue) => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_START, { chatId, chatValue });

export const chatcommentCreateSuccess = (chatcomment) => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_SUCCESS, chatcomment);

export const chatcommentCreateFailed = (error) => 
    createAction(CHATCOMMENT_ACTION_TYPES.CREATE_START, error);

export const chatcommentDeleteStart = (chatcommentId, chatId) => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_START, { chatcommentId, chatId });

export const chatcommentDeleteSuccess = () => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_SUCCESS, 'chatcomment Deleted');

export const chatcommentDeleteFailed = (error) => 
    createAction(CHATCOMMENT_ACTION_TYPES.DELETE_START, error);

export const chatcommentFetchAllStart = (chatId) => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START, chatId );

export const chatcommentFetchAllSuccess = (chatcomment) => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, chatcomment);

export const chatcommentFetchAllFailed = (error) => 
    createAction(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START, error);