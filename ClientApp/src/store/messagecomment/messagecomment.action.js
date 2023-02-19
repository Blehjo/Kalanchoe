import { MESSAGECOMMENT_ACTION_TYPES } from './messagecomment.types';
import { createAction } from '../../utils/reducer';

export const messagecommentCreateStart = (messageId, messageValue) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_START, { messageId, messageValue });

export const messagecommentCreateSuccess = (messagecomment) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_SUCCESS, messagecomment);

export const messagecommentCreateFailed = (error) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_START, error);

export const messagecommentDeleteStart = (messagecommentId, messageId) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_START, { messagecommentId, messageId });

export const messagecommentDeleteSuccess = () => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_SUCCESS, 'messagecomment Deleted');

export const messagecommentDeleteFailed = (error) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_START, error);

export const messagecommentFetchAllStart = (messageId) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START, messageId );

export const messagecommentFetchAllSuccess = (messagecomment) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, messagecomment);

export const messagecommentFetchAllFailed = (error) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START, error);