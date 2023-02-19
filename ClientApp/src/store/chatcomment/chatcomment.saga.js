import { takeLatest, put, all, call } from 'redux-saga/effects';

import { CHATCOMMENT_ACTION_TYPES } from './chatcomment.types';

import {
    chatcommentCreateSuccess,
    chatcommentCreateFailed,
    chatcommentFetchAllFailed,
    chatcommentFetchAllSuccess,
} from './chatcomment.action';

import { addChatComment, getSingleChatcomment, getChatcomments } from '../../utils/api/chatcomment';

export function* getSnapshotFromChatComment(chatcomment, additionalDetails) {
    try {
        const chatcommentSnapshot = yield call(
            getSingleChatcomment,
            chatcomment.chatId,
            additionalDetails
        );
        yield put(chatcommentCreateSuccess({ id: chatcommentSnapshot.chatId, ...chatcommentSnapshot.data }));
    } catch (error) {
        yield put(chatcommentCreateFailed(error));
    }
}

export function* createChatComment({ payload: { chatId, chatValue } }) {
    try {
        const chat = yield call(
            addChatComment,
            chatId,
            chatValue,
        );
        yield call(getSnapshotFromChatComment, chat);
    } catch (error) {
        yield put(chatcommentCreateFailed(error));
    }
}

export function* getUserChatComments() {
    try {
        const chat = yield call(getChatcomments);
        if (!chat) return;
        yield call(chatcommentFetchAllSuccess, chat);
    } catch (error) {
        yield put(chatcommentFetchAllFailed(error));
    }
}

export function* onChatCommentStart() {
    yield takeLatest(CHATCOMMENT_ACTION_TYPES.CREATE_START, createChatComment);
}

export function* onFetchStart() {
    yield takeLatest(CHATCOMMENT_ACTION_TYPES.FETCH_ALL_START, getUserChatComments);
}

export function* chatCommentSagas() {
    yield all([
        call(onChatCommentStart),
        call(onFetchStart)
    ]);
}