import { all, call, put, takeLatest } from 'redux-saga/effects';

import { USERPROFILE_ACTION_TYPES } from './userprofile.types';

import {
    userprofileFetchAllFailed,
    userprofileFetchAllSuccess,
    userprofileFetchSingleFailed,
    userprofileFetchSingleSuccess
} from './userprofile.action';

import {
    getSingleUser,
    getUsers,
} from '../../utils/api/user.api';

export function* fetchAllUserprofile() {
    try {
        const userprofiles = yield call(getUsers);
        if (!userprofiles) return;
        yield call(userprofileFetchAllSuccess, userprofiles);
    } catch (error) {
        yield put(userprofileFetchAllFailed(error));
    }
}

export function* fetchSingleUserprofile() {
    try {
        const userprofile = yield call(getSingleUser);
        if (!userprofile) return;
        yield call(userprofileFetchSingleSuccess, userprofile);
    } catch (error) {
        yield put(userprofileFetchSingleFailed(error));
    }
}

export function* onuserprofileFetchSingleStart() {
    yield takeLatest(USERPROFILE_ACTION_TYPES.FETCH_SINGLE_START, fetchSingleUserprofile);
}

export function* onuserprofileFetchAllStart() {
    yield takeLatest(USERPROFILE_ACTION_TYPES.FETCH_ALL_START, fetchAllUserprofile);
}

export function* userprofileSagas() {
    yield all([
        call(onuserprofileFetchSingleStart),
        call(onuserprofileFetchAllStart)
    ]);
}