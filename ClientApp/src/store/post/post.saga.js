import { takeLatest, put, all, call } from 'redux-saga/effects';

import { POST_ACTION_TYPES } from './post.types';

import {
    postCreateSuccess,
    postCreateFailed,
    postUpdateSuccess,
    postUpdateFailed,
    postDeleteSuccess,
    postDeleteFailed,
    postFetchAllSuccess,
    postFetchAllFailed,
} from './post.action';

export function* createPost({ payload: { userId, postValue, mediaLink } }) {
    try {
        yield put(postCreateSuccess({ userId, postValue, mediaLink }));
    } catch (error) {
        yield put(postCreateFailed(error));
    }
}

export function* updatePost(userId, postId, postValue, mediaLink) {
    try {
        const postSnapshot = yield call(
            postUpdateStart,
            userId,
            postId,
            postValue,
            mediaLink
        );
        yield put(postUpdateSuccess(postSnapshot));
    } catch (error) {
        yield put(postUpdateFailed(error));
    }
}

export function* deletePost(userId, postId) {
    try {
        const postSnapshot = yield call(postDeleteStart, userId, postId);
        yield put(postDeleteSuccess(postSnapshot));
    } catch (error) {
        yield put(postDeleteFailed(error));
    }
}

export function* fetchAllPost(userId) {
    try {
        const postSnapshot = yield call(postFetchAll, userId);
        yield put(postFetchAllSuccess(postSnapshot));
    } catch (error) {
        yield put(postFetchAllFailed(error));
    }
}

export function* onPostCreateStart() {
    yield takeLatest(POST_ACTION_TYPES.CREATE_START, createPost);
}

export function* onPostUpdateStart() {
    yield takeLatest(POST_ACTION_TYPES.UPDATE_START, updatePost);
}

export function* onPostDeleteStart() {
    yield takeLatest(POST_ACTION_TYPES.DELETE_START, deletePost);
}

export function* onPostFetchAllStart() {
    yield takeLatest(POST_ACTION_TYPES.FETCH_ALL_START, fetchAllPost);
}

export function* postSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}