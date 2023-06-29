import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CHANNELCOMMENT_ACTION_TYPES } from './channelcomment.types';

import {
  channelcommentCreateFailed,
  channelcommentCreateSuccess,
  channelcommentFetchAllFailed,
  channelcommentFetchAllSuccess,
} from './channelcomment.action';

import { addChannelComment, getChannelcomments, getSingleChannelcomment } from '../../utils/api/channelcomment.api';

export function* getSnapshotFromChannelcomment(channelcomment, additionalDetails) {
    try {
        const channelcommentSnapshot = yield call(
            getSingleChannelcomment,
            channelcomment.channelcommentId,
            additionalDetails
        );
        yield put(channelcommentCreateSuccess({ id: channelcommentSnapshot.channelcommentId, ...channelcommentSnapshot.data }));
    } catch (error) {
        yield put(channelcommentCreateFailed(error));
    }
}

export function* createChannelcomment({ payload: { channelCommentValue } }) {
    try {
        const channel = yield call(
            addChannelComment,
            channelCommentValue,
        );
        yield call(getSnapshotFromChannelcomment, channel);
    } catch (error) {
        yield put(channelcommentCreateFailed(error));
    }
}

export function* getUserChannelcomments() {
    try {
        const channelcomment = yield call(getChannelcomments);
        if (!channelcomment) return;
        yield call(channelcommentFetchAllSuccess, channelcomment);
    } catch (error) {
        yield put(channelcommentFetchAllFailed(error));
    }
}

export function* onChannelStart() {
    yield takeLatest(CHANNELCOMMENT_ACTION_TYPES.CREATE_START, createChannelcomment);
}

export function* onFetchStart() {
    yield takeLatest(CHANNELCOMMENT_ACTION_TYPES.FETCH_ALL_START, getUserChannelcomments);
}

export function* channelcommentSagas() {
    yield all([
        call(onChannelStart),
        call(onFetchStart)
    ]);
}