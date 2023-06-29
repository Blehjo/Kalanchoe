import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer.utils';
import { AICOMPLETION_ACTION_TYPES, AiCompletion } from './aicompletion.types';

export type AiCompletionCreateStart = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.CREATE_START, { commentValue: string, chatId: number }
>;

export type AiCompletionCreateSuccess = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.CREATE_SUCCESS, AiCompletion[]
>;

export type AiCompletionCreateFailed = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.CREATE_FAILED, Error
>;

export type AiCompletionDeleteStart = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.DELETE_START, { aiCompletionId: number, chatId: number }
>;

export type AiCompletionDeleteSuccess = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.DELETE_SUCCESS, AiCompletion[]
>;

export type AiCompletionDeleteFailed = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.DELETE_FAILED, Error
>;

export type AiCompletionFetchAllStart = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.FETCH_ALL_START, { aiCompletionId: number, chatId: number }
>;

export type AiCompletionFetchAllSuccess = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.FETCH_ALL_SUCCESS, AiCompletion[]
>;

export type AiCompletionFetchAllFailed = ActionWithPayload<
    AICOMPLETION_ACTION_TYPES.FETCH_ALL_FAILED, Error
>;

export const aicompletionCreateStart = withMatcher(
    (communityId, description): AiCompletionCreateStart => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_START, { communityId, description })
);

export const aicompletionCreateSuccess = withMatcher(
    (aicompletions: AiCompletion[]): AiCompletionCreateSuccess => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_SUCCESS, { aicompletions })
);

export const aicompletionCreateFailed = withMatcher(
    (error): AiCompletionCreateFailed => 
    createAction(AICOMPLETION_ACTION_TYPES.CREATE_START, error)
);
    
export const aicompletionUpdateStart = withMatcher(
    (aicompletionId, communityId, description) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_START, { aicompletionId, communityId, description })
);

export const aicompletionUpdateSuccess = withMatcher(
    (aicompletion) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_SUCCESS, aicompletion)
);

export const aicompletionUpdateFailed = withMatcher(
    (error) => 
    createAction(AICOMPLETION_ACTION_TYPES.UPDATE_START, error)
);

export const aicompletionDeleteStart = withMatcher(
    (aicompletionId, communityId) => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_START, { aicompletionId, communityId })
);

export const aicompletionDeleteSuccess = withMatcher(
    () => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_SUCCESS, 'aicompletion Deleted')
);

export const aicompletionDeleteFailed = withMatcher(
    (error) => 
    createAction(AICOMPLETION_ACTION_TYPES.DELETE_START, error)
);

export const aicompletionFetchAllStart = withMatcher(
    (userId) => 
    createAction(AICOMPLETION_ACTION_TYPES.FETCH_ALL_START, { userId })
);

export const aicompletionFetchAllSuccess = withMatcher(
    (aicompletion) => 
    createAction(AICOMPLETION_ACTION_TYPES.FETCH_ALL_SUCCESS, aicompletion)
);

export const aicompletionFetchAllFailed = withMatcher(
    (error: Error): AiCompletionFetchAllFailed => 
    createAction(AICOMPLETION_ACTION_TYPES.FETCH_ALL_START, error)
);