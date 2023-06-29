import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer.utils';
import { AICOMMENT_ACTION_TYPES, AiComment } from './aicomment.types';

export type AiCommentCreateStart = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.CREATE_START, { commentValue: string, chatId: number }
>;

export type AiCommentCreateSuccess = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.CREATE_SUCCESS, AiComment[]
>;

export type AiCommentCreateFailed = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.CREATE_FAILED, Error
>;

export type AiCommentDeleteStart = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.DELETE_START, { aiCommentId: number, chatId: number }
>;

export type AiCommentDeleteSuccess = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.DELETE_SUCCESS, AiComment[]
>;

export type AiCommentDeleteFailed = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.DELETE_FAILED, Error
>;

export type AiCommentFetchAllStart = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.FETCH_ALL_START, { aiCommentId: number, chatId: number }
>;

export type AiCommentFetchAllSuccess = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, AiComment[]
>;

export type AiCommentFetchAllFailed = ActionWithPayload<
    AICOMMENT_ACTION_TYPES.FETCH_ALL_FAILED, Error
>;

export const aicommentCreateStart = withMatcher(
    (aiCommentId: number, commentValue: string, chatId: number): AiCommentCreateStart => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_START, { aiCommentId, commentValue, chatId })
);

export const aicommentCreateSuccess = withMatcher(
    (comments: AiComment[]): AiCommentCreateSuccess => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_SUCCESS, comments)
);

export const aicommentCreateFailed = withMatcher(
    (error: Error): AiCommentCreateFailed => 
    createAction(AICOMMENT_ACTION_TYPES.CREATE_FAILED, error)
);

export const aicommentDeleteStart = withMatcher(
    (aiCommentId: number, chatId: number): AiCommentDeleteStart => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_START, { aiCommentId, chatId })
);

export const aicommentDeleteSuccess = withMatcher(
    (comments: AiComment[]): AiCommentDeleteSuccess => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_SUCCESS, comments)
);

export const aicommentDeleteFailed = withMatcher(
    (error: Error): AiCommentDeleteFailed => 
    createAction(AICOMMENT_ACTION_TYPES.DELETE_FAILED, error)
);

export const aicommentFetchAllStart = withMatcher(
    (aiCommentId: number, chatId: number): AiCommentFetchAllStart => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_START, { aiCommentId, chatId })
);

export const aicommentFetchAllSuccess = withMatcher(
    (comments: AiComment[]): AiCommentFetchAllSuccess => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, comments)
);

export const aicommentFetchAllFailed = withMatcher(
    (error: Error): AiCommentFetchAllFailed => 
    createAction(AICOMMENT_ACTION_TYPES.FETCH_ALL_FAILED, error)
);