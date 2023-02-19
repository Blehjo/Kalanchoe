import { takeLatest, put, all, call } from 'redux-saga/effects';

import { CHAT_ACTION_TYPES } from './chat.types';

import {
    chatCreateSuccess,
    chatCreateFailed,
    chatFetchAllFailed,
    chatFetchAllSuccess,
} from './chat.action';

import { addChat, getChats, getSingleChat } from '../../utils/api/chat';

export function* getSnapshotFromChat(chat, additionalDetails) {
    try {
        const chatSnapshot = yield call(
            getSingleChat,
            chat.chatId,
            additionalDetails
        );
        yield put(chatCreateSuccess({ id: chatSnapshot.chatId, ...chatSnapshot.data }));
    } catch (error) {
        yield put(chatCreateFailed(error));
    }
}

export function* createChat({ payload: { title } }) {
    try {
        const chat = yield call(
            addChat,
            title,
        );
        yield call(getSnapshotFromChat, chat);
    } catch (error) {
        yield put(chatCreateFailed(error));
    }
}

export function* getUserChats() {
    try {
        const chat = yield call(getChats);
        if (!chat) return;
        yield call(chatFetchAllSuccess, chat);
    } catch (error) {
        yield put(chatFetchAllFailed(error));
    }
}

export function* onChatStart() {
    yield takeLatest(CHAT_ACTION_TYPES.CREATE_START, createChat);
}

export function* onFetchStart() {
    yield takeLatest(CHAT_ACTION_TYPES.FETCH_ALL_START, getUserChats);
}

export function* chatSagas() {
    yield all([
        call(onChatStart),
        call(onFetchStart)
    ]);
}