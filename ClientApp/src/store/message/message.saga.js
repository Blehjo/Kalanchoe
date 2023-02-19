import { takeLatest, put, all, call } from 'redux-saga/effects';

import { MESSAGE_ACTION_TYPES } from './message.types';

import {
    messageCreateSuccess,
    messageCreateFailed,
    messageFetchAllFailed,
    messageFetchAllSuccess,
} from './message.action';

import { addMessage, getAllMessages, getSingleMessage } from '../../utils/api/message';

export function* getSnapshotFromMessage(message, additionalDetails) {
    try {
        const messageSnapshot = yield call(
            getSingleMessage,
            message.messageId,
            additionalDetails
        );
        yield put(messageCreateSuccess({ id: messageSnapshot.messageId, ...messageSnapshot.data }));
    } catch (error) {
        yield put(messageCreateFailed(error));
    }
}

export function* createMessage({ payload: { messageValue } }) {
    try {
        const message = yield call(
            addMessage,
            messageValue,
        );
        yield call(getSnapshotFromMessage, message);
    } catch (error) {
        yield put(messageCreateFailed(error));
    }
}

export function* getUserMessages() {
    try {
        const message = yield call(getAllMessages);
        if (!message) return;
        yield call(messageFetchAllSuccess, message);
    } catch (error) {
        yield put(messageFetchAllFailed(error));
    }
}

export function* onMessageStart() {
    yield takeLatest(MESSAGE_ACTION_TYPES.CREATE_START, createMessage);
}

export function* onFetchStart() {
    yield takeLatest(MESSAGE_ACTION_TYPES.FETCH_ALL_START, getUserMessages);
}

export function* messageSagas() {
    yield all([
        call(onMessageStart),
        call(onFetchStart)
    ]);
}