import { CHAT_ACTION_TYPES } from './chat.types';
import { createAction } from '../../utils/reducer';

export const chatCreateStart = (title) => 
    createAction(CHAT_ACTION_TYPES.CREATE_START, { title });

export const chatCreateSuccess = (chat) => 
    createAction(CHAT_ACTION_TYPES.CREATE_SUCCESS, chat);

export const chatCreateFailed = (error) => 
    createAction(CHAT_ACTION_TYPES.CREATE_START, error);
    
export const chatUpdateStart = (chatId, userId, title) => 
    createAction(CHAT_ACTION_TYPES.UPDATE_START, { chatId, userId, title });

export const chatUpdateSuccess = (chat) => 
    createAction(CHAT_ACTION_TYPES.UPDATE_SUCCESS, chat);

export const chatUpdateFailed = (error) => 
    createAction(CHAT_ACTION_TYPES.UPDATE_START, error);

export const chatDeleteStart = (chatId, userId) => 
    createAction(CHAT_ACTION_TYPES.DELETE_START, { chatId, userId });

export const chatDeleteSuccess = () => 
    createAction(CHAT_ACTION_TYPES.DELETE_SUCCESS, 'Chat Deleted');

export const chatDeleteFailed = (error) => 
    createAction(CHAT_ACTION_TYPES.DELETE_START, error);

export const chatFetchAllStart = (userId) => 
    createAction(CHAT_ACTION_TYPES.FETCH_ALL_START, userId);

export const chatFetchAllSuccess = (chat) => 
    createAction(CHAT_ACTION_TYPES.FETCH_ALL_SUCCESS, chat);

export const chatFetchAllFailed = (error) => 
    createAction(CHAT_ACTION_TYPES.FETCH_ALL_START, error);