import { createAction } from '../../utils/reducer.utils';
import { NOTE_ACTION_TYPES } from './note.types';

export const noteCreateStart = (noteId, title) => 
    createAction(NOTE_ACTION_TYPES.CREATE_START, { noteId, title });

export const noteCreateSuccess = (note) => 
    createAction(NOTE_ACTION_TYPES.CREATE_SUCCESS, note);

export const noteCreateFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.CREATE_START, error);
    
export const noteUpdateStart = (noteId, noteValue) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_START, { noteId, noteValue });

export const noteUpdateSuccess = (note) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_SUCCESS, note);

export const noteUpdateFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_START, error);

export const noteDeleteStart = (noteId) => 
    createAction(NOTE_ACTION_TYPES.DELETE_START, { noteId });

export const noteDeleteSuccess = () => 
    createAction(NOTE_ACTION_TYPES.DELETE_SUCCESS, 'Note Deleted');

export const noteDeleteFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.DELETE_START, error);

export const noteFetchAllStart = (userId) => 
    createAction(NOTE_ACTION_TYPES.FETCH_ALL_START, userId);

export const noteFetchAllSuccess = (note) => 
    createAction(NOTE_ACTION_TYPES.FETCH_ALL_SUCCESS, note);

export const noteFetchAllFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.FETCH_ALL_START, error);