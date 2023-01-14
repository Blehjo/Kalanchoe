import { NOTE_ACTION_TYPES } from './note.types';
import { createAction } from '../../utils/reducer';

export const noteCreateStart = (panelId, title) => 
    createAction(NOTE_ACTION_TYPES.CREATE_START, { panelId, title });

export const noteCreateSuccess = (note) => 
    createAction(NOTE_ACTION_TYPES.CREATE_SUCCESS, note);

export const noteCreateFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.CREATE_START, error);
    
export const noteUpdateStart = (noteId, panelId, noteValue) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_START, { noteId, panelId, noteValue });

export const noteUpdateSuccess = (note) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_SUCCESS, note);

export const noteUpdateFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.UPDATE_START, error);

export const noteDeleteStart = (noteId, panelId) => 
    createAction(NOTE_ACTION_TYPES.DELETE_START, { noteId, panelId });

export const noteDeleteSuccess = () => 
    createAction(NOTE_ACTION_TYPES.DELETE_SUCCESS, 'Note Deleted');

export const noteDeleteFailed = (error) => 
    createAction(NOTE_ACTION_TYPES.DELETE_START, error);