import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SAVED_ACTION_TYPES } from './saved.types';

import {
  savedCreateFailed,
  savedCreateSuccess,
  savedDeleteFailed,
  savedDeleteSuccess,
  savedFetchAllFailed,
  savedFetchAllSuccess,
  savedFetchSingleFailed,
  savedFetchSingleSuccess,
  savedUpdateFailed,
  savedUpdateSuccess,
} from './saved.action';

import {
  addSaved,
  deleteSaved,
  editSaved,
  getSaved,
  getSingleSaved
} from '../../utils/api/saved.api';

export function* createSaved({ userId, title, link }) {
    try {
        const saved = call(addSaved({ userId, title, link }));
        yield put(savedCreateSuccess(saved));
    } catch (error) {
        yield put(savedCreateFailed(error));
    }
}

export function* updateSaved({ payload: { userId, savedId, title, link }}) {
    try {
        const { saved } = yield call(
            editSaved,
            userId,
            savedId,
            title,
            link
        );
        yield put(savedUpdateSuccess(saved));
    } catch (error) {
        yield put(savedUpdateFailed(error));
    }
}

export function* deleteItem(userId, savedId) {
    try {
        const { saved } = yield call(deleteSaved, userId, savedId);
        yield put(savedDeleteSuccess(saved));
    } catch (error) {
        yield put(savedDeleteFailed(error));
    }
}

export function* fetchSingleSaved(userId, savedId) {
    try {
        const { saved } = yield call(getSingleSaved, userId, savedId);
        yield put(savedFetchSingleSuccess(saved));
    } catch (error) {
        yield put(savedFetchSingleFailed(error));
    }
}

export function* fetchAllSaved(userId) {
    try {
        const { saved } = yield call(getSaved, userId);
        yield put(savedFetchAllSuccess(saved));
    } catch (error) {
        yield put(savedFetchAllFailed(error));
    }
}

export function* onSavedCreateStart() {
    yield takeLatest(SAVED_ACTION_TYPES.CREATE_START, createSaved);
}

export function* onSavedUpdateStart() {
    yield takeLatest(SAVED_ACTION_TYPES.UPDATE_START, updateSaved);
}

export function* onSavedDeleteStart() {
    yield takeLatest(SAVED_ACTION_TYPES.DELETE_START, deleteItem);
}

export function* onSavedFetchSingleStart() {
    yield takeLatest(SAVED_ACTION_TYPES.FETCH_SINGLE_START, fetchSingleSaved); 
}

export function* onSavedFetchAllStart() {
    yield takeLatest(SAVED_ACTION_TYPES.FETCH_ALL_START, fetchAllSaved);
}

export function* savedSagas() {
    yield all([
        call(onSavedCreateStart),
        call(onSavedUpdateStart),
        call(onSavedDeleteStart),
        call(onSavedFetchAllStart),
        call(onSavedFetchSingleStart)
    ]);
}