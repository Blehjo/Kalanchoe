import { createAction } from '../../utils/reducer.utils';
import { PANEL_ACTION_TYPES } from './panel.types';

export const panelCreateStart = (userId, title) => 
    createAction(PANEL_ACTION_TYPES.CREATE_START, { userId, title });

export const panelCreateSuccess = (panel) => 
    createAction(PANEL_ACTION_TYPES.CREATE_SUCCESS, panel);

export const panelCreateFailed = (error) => 
    createAction(PANEL_ACTION_TYPES.CREATE_START, error);
    
export const panelUpdateStart = (userId, panelId, title) => 
    createAction(PANEL_ACTION_TYPES.UPDATE_START, { userId, panelId, title });

export const panelUpdateSuccess = (panel) => 
    createAction(PANEL_ACTION_TYPES.UPDATE_SUCCESS, panel);

export const panelUpdateFailed = (error) => 
    createAction(PANEL_ACTION_TYPES.UPDATE_START, error);

export const panelDeleteStart = (userId, panelId) => 
    createAction(PANEL_ACTION_TYPES.DELETE_START, { userId, panelId });

export const panelDeleteSuccess = () => 
    createAction(PANEL_ACTION_TYPES.DELETE_SUCCESS, 'Panel Deleted');

export const panelDeleteFailed = (error) => 
    createAction(PANEL_ACTION_TYPES.DELETE_START, error);

export const panelFetchSingleStart = (userId) => 
    createAction(PANEL_ACTION_TYPES.FETCH_SINGLE_START, userId);

export const panelFetchSingleSuccess = (panel) => 
    createAction(PANEL_ACTION_TYPES.FETCH_SINGLE_SUCCESS, panel);

export const panelFetchSingleFailed = (error) => 
    createAction(PANEL_ACTION_TYPES.FETCH_SINGLE_START, error);

export const panelFetchUserStart = (panels) => 
    createAction(PANEL_ACTION_TYPES.FETCH_USER_START, panels);

export const panelFetchAllStart = (userId) => 
    createAction(PANEL_ACTION_TYPES.FETCH_ALL_START, userId);

export const panelFetchAllSuccess = (panel) => 
    createAction(PANEL_ACTION_TYPES.FETCH_ALL_SUCCESS, panel);

export const panelFetchAllFailed = (error) => 
    createAction(PANEL_ACTION_TYPES.FETCH_ALL_START, error);