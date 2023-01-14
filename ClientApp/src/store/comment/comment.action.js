import { COMMENT_ACTION_TYPES } from './comment.types';
import { createAction } from '../../utils/reducer';

export const commentCreateStart = (userId, postId, commentValue) => 
    createAction(COMMENT_ACTION_TYPES.CREATE_START, { userId, postId, commentValue });

export const commentCreateSuccess = (comment) => 
    createAction(COMMENT_ACTION_TYPES.CREATE_SUCCESS, comment);

export const commentCreateFailed = (error) => 
    createAction(COMMENT_ACTION_TYPES.CREATE_START, error);
    
export const commentUpdateStart = (commentId, userId, postId, commentValue) => 
    createAction(COMMENT_ACTION_TYPES.UPDATE_START, { commentId, userId, postId, commentValue });

export const commentUpdateSuccess = (comment) => 
    createAction(COMMENT_ACTION_TYPES.UPDATE_SUCCESS, comment);

export const commentUpdateFailed = (error) => 
    createAction(COMMENT_ACTION_TYPES.UPDATE_START, error);

export const commentDeleteStart = (commentId, postId, userId) => 
    createAction(COMMENT_ACTION_TYPES.DELETE_START, { commentId, postId, userId });

export const commentDeleteSuccess = () => 
    createAction(COMMENT_ACTION_TYPES.DELETE_SUCCESS, 'comment Deleted');

export const commentDeleteFailed = (error) => 
    createAction(COMMENT_ACTION_TYPES.DELETE_START, error);