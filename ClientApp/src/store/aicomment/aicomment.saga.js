import { takeLatest, put, all, call } from 'redux-saga/effects';

import { AICOMMENT_ACTION_TYPES } from './aicomment.types';

import {
    aicommentCreateSuccess,
    aicommentCreateFailed,
    aicommentFetchAllFailed,
    aicommentFetchAllSuccess,
} from './aicomment.action';

import { addAiComment, getSingleAicomment, getAicomments } from '../../utils/api/aicomment';

export function* getSnapshotFromAiComment(aicomment, additionalDetails) {
    try {
        const aicommentSnapshot = yield call(
            getSingleAicomment,
            aicomment.chatId,
            additionalDetails
        );
        yield put(aicommentCreateSuccess({ id: aicommentSnapshot.chatId, ...aicommentSnapshot.data }));
    } catch (error) {
        yield put(aicommentCreateFailed(error));
    }
}

export function* createAiComment({ payload: { chatId, commentValue } }) {
    try {
        const chat = yield call(
            addAiComment,
            chatId,
            commentValue,
        );
        yield call(getSnapshotFromAiComment, chat);
    } catch (error) {
        yield put(aicommentCreateFailed(error));
    }
}

export function* getUserAiComments() {
    try {
        const chat = yield call(getAicomments);
        if (!chat) return;
        yield call(aicommentFetchAllSuccess, chat);
    } catch (error) {
        yield put(aicommentFetchAllFailed(error));
    }
}

export function* onAiCommentStart() {
    yield takeLatest(AICOMMENT_ACTION_TYPES.CREATE_START, createAiComment);
}

export function* onFetchStart() {
    yield takeLatest(AICOMMENT_ACTION_TYPES.FETCH_ALL_START, getUserAiComments);
}

export function* aiCommentSagas() {
    yield all([
        call(onAiCommentStart),
        call(onFetchStart)
    ]);
}