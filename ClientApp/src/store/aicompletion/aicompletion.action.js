import { AICOMPLETION_ACTION_TYPES } from './aicompletion.types';
import { createAction } from '../../utils/reducer';

export const aicompletionCreateStart = (communityId, description) => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_START, { communityId, description });

export const aicompletionCreateSuccess = (aicompletion) => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_SUCCESS, aicompletion);

export const aicompletionCreateFailed = (error) => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_START, error);
    
export const aicompletionUpdateStart = (aicompletionId, communityId, description) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_START, { aicompletionId, communityId, description });

export const aicompletionUpdateSuccess = (aicompletion) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_SUCCESS, aicompletion);

export const aicompletionUpdateFailed = (error) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_START, error);

export const aicompletionDeleteStart = (aicompletionId, communityId) => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_START, { aicompletionId, communityId });

export const aicompletionDeleteSuccess = () => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_SUCCESS, 'aicompletion Deleted');

export const aicompletionDeleteFailed = (error) => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_START, error);