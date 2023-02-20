import { takeLatest, put, all, call } from 'redux-saga/effects';

import { CHANNEL_ACTION_TYPES } from './channel.types';

import {
    channelCreateSuccess,
    channelCreateFailed,
    channelFetchAllFailed,
    channelFetchAllSuccess,
} from './channel.action';

import { addChannel, getChannels, getSingleChannel } from '../../utils/api/channel';

export function* getSnapshotFromChannel(channel, additionalDetails) {
    try {
        const channelSnapshot = yield call(
            getSingleChannel,
            channel.channelId,
            additionalDetails
        );
        yield put(channelCreateSuccess({ id: channelSnapshot.channelId, ...channelSnapshot.data }));
    } catch (error) {
        yield put(channelCreateFailed(error));
    }
}

export function* createChannel({ payload: { description } }) {
    try {
        const channel = yield call(
            addChannel,
            description,
        );
        yield call(getSnapshotFromChannel, channel);
    } catch (error) {
        yield put(channelCreateFailed(error));
    }
}

export function* getUserChannels() {
    try {
        const channel = yield call(getChannels);
        if (!channel) return;
        yield call(channelFetchAllSuccess, channel);
    } catch (error) {
        yield put(channelFetchAllFailed(error));
    }
}

export function* onChannelStart() {
    yield takeLatest(CHANNEL_ACTION_TYPES.CREATE_START, createChannel);
}

export function* onFetchStart() {
    yield takeLatest(CHANNEL_ACTION_TYPES.FETCH_ALL_START, getUserChannels);
}

export function* channelSagas() {
    yield all([
        call(onChannelStart),
        call(onFetchStart)
    ]);
}