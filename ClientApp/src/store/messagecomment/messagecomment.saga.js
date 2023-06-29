import { all, call, put, takeLatest } from 'redux-saga/effects';

import { MESSAGECOMMENT_ACTION_TYPES } from './messagecomment.types';

import {
  messagecommentCreateFailed,
  messagecommentCreateSuccess,
  messagecommentFetchAllFailed,
  messagecommentFetchAllSuccess,
} from './messagecomment.action';

import { addMessagecomment, getMessagecomments, getSingleMessagecomment } from '../../utils/api/messagecomment.api';

export function* getSnapshotFromMessagecomment(messagecomment, additionalDetails) {
    try {
        const messagecommentSnapshot = yield call(
            getSingleMessagecomment,
            messagecomment.messageId,
            additionalDetails
        );
        yield put(messagecommentCreateSuccess({ id: messagecommentSnapshot.chatId, ...messagecommentSnapshot.data }));
    } catch (error) {
        yield put(messagecommentCreateFailed(error));
    }
}

export function* createMessagecomment({ payload: { messageId, messageValue } }) {
    try {
        const message = yield call(
            addMessagecomment,
            messageId,
            messageValue,
        );
        yield call(getSnapshotFromMessagecomment, message);
    } catch (error) {
        yield put(messagecommentCreateFailed(error));
    }
}

export function* getUserMessagecomments() {
    try {
        const message = yield call(getMessagecomments);
        if (!message) return;
        yield call(messagecommentFetchAllSuccess, message);
    } catch (error) {
        yield put(messagecommentFetchAllFailed(error));
    }
}

export function* onMessagecommentStart() {
    yield takeLatest(MESSAGECOMMENT_ACTION_TYPES.CREATE_START, createMessagecomment);
}

export function* onFetchStart() {
    yield takeLatest(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START, getUserMessagecomments);
}

export function* messageCommentSagas() {
    yield all([
        call(onMessagecommentStart),
        call(onFetchStart)
    ]);
}