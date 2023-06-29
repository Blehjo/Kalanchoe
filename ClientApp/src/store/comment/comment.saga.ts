import { all, call, put, takeLatest } from 'redux-saga/effects';

import { COMMENT_ACTION_TYPES } from './comment.types';

import {
  commentCreateFailed,
  commentCreateSuccess,
  commentFetchAllFailed,
  commentFetchAllSuccess,
} from './comment.action';

import { addComment, getComments, getSingleComment } from '../../utils/api/comment.api';

export function* getSnapshotFromComment(comment, additionalDetails) {
    try {
        const commentSnapshot = yield call(
            getSingleComment,
            comment.Id,
            additionalDetails
        );
        yield put(commentCreateSuccess({ id: commentSnapshot.chatId, ...commentSnapshot.data }));
    } catch (error) {
        yield put(commentCreateFailed(error));
    }
}

export function* createComment({ payload: { commentId, commentValue } }) {
    try {
        const comment = yield call(
            addComment,
            commentId,
            commentValue,
        );
        yield call(getSnapshotFromComment, comment);
    } catch (error) {
        yield put(commentCreateFailed(error));
    }
}

export function* getUserComments() {
    try {
        const comment = yield call(getComments);
        if (!comment) return;
        yield call(commentFetchAllSuccess, comment);
    } catch (error) {
        yield put(commentFetchAllFailed(error));
    }
}

export function* onCommentStart() {
    yield takeLatest(COMMENT_ACTION_TYPES.CREATE_START, createComment);
}

export function* onFetchStart() {
    yield takeLatest(COMMENT_ACTION_TYPES.FETCH_ALL_START, getUserComments);
}

export function* commentSagas() {
    yield all([
        call(onCommentStart),
        call(onFetchStart)
    ]);
}