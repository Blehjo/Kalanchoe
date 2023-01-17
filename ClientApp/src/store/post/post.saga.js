import { takeLatest, put, all, call } from 'redux-saga/effects';

import { POST_ACTION_TYPES } from './post.types';

import {
    postCreateSuccess,
    postCreateFailed,
    postUpdateSuccess,
    postUpdateFailed,
    postDeleteSuccess,
    postDeleteFailed,
    postFetchSingleSuccess,
    postFetchSingleFailed,
    postFetchAllSuccess,
    postFetchAllFailed,
} from './post.action';

import { 
    getSinglePost,
    getPosts,
    addPost,
    editPost,
    deletePost
} from '../../utils/api/post';

export function* createPost({ userId, postValue, mediaLink }) {
    try {
        const post = call(addPost({ userId, postValue, mediaLink }));
        yield put(postCreateSuccess(post));
    } catch (error) {
        yield put(postCreateFailed(error));
    }
}

export function* updatePost({ payload: { userId, postId, postValue, mediaLink }}) {
    try {
        const { post } = yield call(
            editPost,
            userId,
            postId,
            postValue,
            mediaLink
        );
        yield put(postUpdateSuccess(post));
    } catch (error) {
        yield put(postUpdateFailed(error));
    }
}

export function* deleteItem(userId, postId) {
    try {
        const { post } = yield call(deletePost, userId, postId);
        yield put(postDeleteSuccess(post));
    } catch (error) {
        yield put(postDeleteFailed(error));
    }
}

export function* fetchSinglePost(userId, postId) {
    try {
        const { post } = yield call(getSinglePost, userId, postId);
        yield put(postFetchSingleSuccess(post));
    } catch (error) {
        yield put(postFetchSingleFailed(error));
    }
}

export function* fetchAllPost(userId) {
    try {
        const { post } = yield call(getPosts, userId);
        yield put(postFetchAllSuccess(post));
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
    yield takeLatest(POST_ACTION_TYPES.DELETE_START, deleteItem);
}

export function* onPostFetchSingleStart() {
    yield takeLatest(POST_ACTION_TYPES.FETCH_SINGLE_START, fetchSinglePost); 
}

export function* onPostFetchAllStart() {
    yield takeLatest(POST_ACTION_TYPES.FETCH_ALL_START, fetchAllPost);
}

export function* postSagas() {
    yield all([
        call(onPostCreateStart),
        call(onPostUpdateStart),
        call(onPostDeleteStart),
        call(onPostFetchAllStart),
        call(onPostFetchSingleStart)
    ]);
}