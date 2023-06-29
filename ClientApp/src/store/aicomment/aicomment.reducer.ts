import { AnyAction } from 'redux';

import { AiComment } from './aicomment.types';
import { aicommentCreateFailed, aicommentCreateStart, aicommentCreateSuccess, aicommentDeleteFailed, aicommentDeleteStart, aicommentDeleteSuccess, aicommentFetchAllFailed, aicommentFetchAllStart, aicommentFetchAllSuccess } from './aicomment.action';

export type AiCommentState = {
    readonly aiCommentId: number | null;
    readonly aiComments: AiComment[] | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: AiCommentState = {
    aiCommentId: null,
    aiComments: [],
    isLoading: false,
    error: null,
};

export const aiCommentReducer = (
    state = INITIAL_STATE, action: AnyAction
): AiCommentState => {
    if (
        aicommentCreateStart.match(action) ||
        aicommentDeleteStart.match(action) ||
        aicommentFetchAllStart.match(action) 
    ) {
        return { ...state, isLoading: true }
    }
    if (
        aicommentDeleteSuccess.match(action) ||
        aicommentFetchAllSuccess.match(action) ||
        aicommentCreateSuccess.match(action) 
    ) {
        return { ...state, isLoading: false, aiComments: action.payload };
    } 
    if (
        aicommentCreateFailed.match(action) ||
        aicommentDeleteFailed.match(action) ||
        aicommentFetchAllFailed.match(action) 
    ) {
      return { ...state, isLoading: false, error: action.payload };
    }
  
    return state;
};