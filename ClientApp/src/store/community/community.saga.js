import { all, call, put, takeLatest } from 'redux-saga/effects';

import { COMMUNITY_ACTION_TYPES } from './community.types';

import {
  communityCreateFailed,
  communityCreateSuccess,
  communityDeleteFailed,
  communityDeleteSuccess,
  communityFetchAllFailed,
  communityFetchAllSuccess,
  communityFetchSingleFailed,
  communityFetchSingleSuccess,
  communityUpdateFailed,
  communityUpdateSuccess,
} from './community.action';

import {
  addCommunity,
  deleteCommunity,
  editCommunity,
  getCommunities,
  getSingleCommunity
} from '../../utils/api/community.api';

export function* createCommunity({ userId, communityValue, mediaLink }) {
    try {
        const community = call(addCommunity({ userId, communityValue, mediaLink }));
        yield put(communityCreateSuccess(community));
    } catch (error) {
        yield put(communityCreateFailed(error));
    }
}

export function* updateCommunity({ payload: { userId, communityId, communityValue, mediaLink }}) {
    try {
        const { community } = yield call(
            editCommunity,
            userId,
            communityId,
            communityValue,
            mediaLink
        );
        yield put(communityUpdateSuccess(community));
    } catch (error) {
        yield put(communityUpdateFailed(error));
    }
}

export function* deleteItem(userId, communityId) {
    try {
        const { community } = yield call(deleteCommunity, userId, communityId);
        yield put(communityDeleteSuccess(community));
    } catch (error) {
        yield put(communityDeleteFailed(error));
    }
}

export function* fetchSingleCommunity(userId, communityId) {
    try {
        const { community } = yield call(getSingleCommunity, userId, communityId);
        yield put(communityFetchSingleSuccess(community));
    } catch (error) {
        yield put(communityFetchSingleFailed(error));
    }
}

export function* fetchAllCommunity(userId) {
    try {
        const { community } = yield call(getCommunities, userId);
        if (!community) return;
        yield put(communityFetchAllSuccess(community));
    } catch (error) {
        yield put(communityFetchAllFailed(error));
    }
}

export function* onCommunityCreateStart() {
    yield takeLatest(COMMUNITY_ACTION_TYPES.CREATE_START, createCommunity);
}

export function* onCommunityUpdateStart() {
    yield takeLatest(COMMUNITY_ACTION_TYPES.UPDATE_START, updateCommunity);
}

export function* onCommunityDeleteStart() {
    yield takeLatest(COMMUNITY_ACTION_TYPES.DELETE_START, deleteItem);
}

export function* onCommunityFetchSingleStart() {
    yield takeLatest(COMMUNITY_ACTION_TYPES.FETCH_SINGLE_START, fetchSingleCommunity); 
}

export function* onCommunityFetchAllStart() {
    yield takeLatest(COMMUNITY_ACTION_TYPES.FETCH_ALL_START, fetchAllCommunity);
}

export function* communitySagas() {
    yield all([
        call(onCommunityCreateStart),
        call(onCommunityUpdateStart),
        call(onCommunityDeleteStart),
        call(onCommunityFetchAllStart),
        call(onCommunityFetchSingleStart)
    ]);
}