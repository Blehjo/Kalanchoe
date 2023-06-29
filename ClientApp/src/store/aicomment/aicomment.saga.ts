import { takeLatest, put, all, call } from 'typed-redux-saga';

import { AICOMMENT_ACTION_TYPES } from './aicomment.types';

import {
    aicommentCreateSuccess,
    aicommentCreateFailed,
    aicommentFetchAllFailed,
    aicommentFetchAllSuccess,
    AiCommentFetchAllStart,
    AiCommentCreateStart,
    AiCommentDeleteStart,
} from './aicomment.action';

import { 
    addAiComment, 
    deleteAiComment,
    getAiComments 
} from '../../utils/api/aicomment.api';

export function* createAiComment({ payload: { commentValue, chatId }}: AiCommentCreateStart) {
    try {
        const aicomments = yield* call(
            addAiComment,
            commentValue,
            chatId
        );
        yield* put(aicommentCreateSuccess(aicomments));
    } catch (error: any) {
        yield* put(aicommentCreateFailed(error));
    }
}

export function* removeAiComment({ payload: { aiCommentId }}: AiCommentDeleteStart) {
    try {
        const aicomments = yield* call(
            deleteAiComment,
            aiCommentId
        );
        if (!aicomments) return;
        yield* put(aicommentFetchAllSuccess(aicomments));
    } catch (error: any) {
        yield* put(aicommentFetchAllFailed(error));
    }
}

export function* getAllAiComments({ payload: { chatId }}: AiCommentFetchAllStart) {
    try {
        const aicomments = yield* call(
            getAiComments,
            chatId
        );
        yield* put(aicommentCreateSuccess(aicomments));
    } catch (error: any) {
        yield* put(aicommentCreateFailed(error));
    }
}

export function* onAiCommentStart() {
    yield* takeLatest(AICOMMENT_ACTION_TYPES.CREATE_START, createAiComment);
}

export function* onDeleteStart() {
    yield* takeLatest(AICOMMENT_ACTION_TYPES.DELETE_START, removeAiComment);
}

export function* onFetchStart() {
    yield* takeLatest(AICOMMENT_ACTION_TYPES.FETCH_ALL_START, getAllAiComments);
}

export function* aiCommentSagas() {
    yield* all([
        call(onAiCommentStart),
        call(onFetchStart),
        call(onDeleteStart)
    ]);
}