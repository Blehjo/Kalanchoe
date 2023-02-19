import { MESSAGE_ACTION_TYPES } from './message.types';
import { createAction } from '../../utils/reducer';

export const messageCreateStart = (userId, messageValue) => 
    createAction(MESSAGE_ACTION_TYPES.CREATE_START, { userId, messageValue });

export const messageCreateSuccess = (message) => 
    createAction(MESSAGE_ACTION_TYPES.CREATE_SUCCESS, message);

export const messageCreateFailed = (error) => 
    createAction(MESSAGE_ACTION_TYPES.CREATE_START, error);
    
export const messageUpdateStart = (messageId, userId, messageValue) => 
    createAction(MESSAGE_ACTION_TYPES.UPDATE_START, { messageId, userId, messageValue });

export const messageUpdateSuccess = (message) => 
    createAction(MESSAGE_ACTION_TYPES.UPDATE_SUCCESS, message);

export const messageUpdateFailed = (error) => 
    createAction(MESSAGE_ACTION_TYPES.UPDATE_START, error);

export const messageDeleteStart = (messageId, userId) => 
    createAction(MESSAGE_ACTION_TYPES.DELETE_START, { messageId, userId });

export const messageDeleteSuccess = () => 
    createAction(MESSAGE_ACTION_TYPES.DELETE_SUCCESS, 'Message Deleted');

export const messageDeleteFailed = (error) => 
    createAction(MESSAGE_ACTION_TYPES.DELETE_START, error);

export const messageFetchAllStart = (userId) => 
    createAction(MESSAGE_ACTION_TYPES.FETCH_ALL_START, userId);

export const messageFetchAllSuccess = (message) => 
    createAction(MESSAGE_ACTION_TYPES.FETCH_ALL_SUCCESS, message);

export const messageFetchAllFailed = (error) => 
    createAction(MESSAGE_ACTION_TYPES.FETCH_ALL_START, error);