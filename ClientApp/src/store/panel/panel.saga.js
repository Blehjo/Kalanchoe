import { takeLatest, put, all, call } from 'redux-saga/effects';

import { PANEL_ACTION_TYPES } from './panel.types';

import {
    panelCreateSuccess,
    panelCreateFailed,
    panelUpdateSuccess,
    panelUpdateFailed,
    panelDeleteSuccess,
    panelDeleteFailed,
    panelFetchAllSuccess,
    panelFetchAllFailed,
} from './panel.action';

import { 
    getSinglePanel,
    getPanels,
    addPanel,
    editPanel,
    deletePanel
} from '../../utils/api/panel';

export function* createPanel({ payload: { userId, title } }) {
    try {
        const { panel } = call(addPanel({ userId, title }));
        yield put(panelCreateSuccess(panel));
    } catch (error) {
        yield put(panelCreateFailed(error));
    }
}

export function* updatePanel({ payload: { userId, panelId, title }}) {
    try {
        const { panel } = yield call(
            editPanel,
            userId,
            panelId,
            title,
        );
        yield put(panelUpdateSuccess(panel));
    } catch (error) {
        yield put(panelUpdateFailed(error));
    }
}

export function* deleteItem(userId, panelId) {
    try {
        const { panel } = yield call(deletePanel, userId, panelId);
        yield put(panelDeleteSuccess(panel));
    } catch (error) {
        yield put(panelDeleteFailed(error));
    }
}

export function* fetchSinglePanel(panelId) {
    try {
        const { panel } = yield call(getSinglePanel, userId, panelId);
        yield put(panelFetchSingleSuccess(panel));
    } catch (error) {
        yield put(panelFetchSingleFailed(error));
    }
}

export function* fetchAllPanel(userId) {
    try {
        const { panel } = yield call(getpanels, userId);
        yield put(panelFetchAllSuccess(panel));
    } catch (error) {
        yield put(panelFetchAllFailed(error));
    }
}

export function* onpanelCreateStart() {
    yield takeLatest(panel_ACTION_TYPES.CREATE_START, createpanel);
}

export function* onpanelUpdateStart() {
    yield takeLatest(panel_ACTION_TYPES.UPDATE_START, updatepanel);
}

export function* onpanelDeleteStart() {
    yield takeLatest(panel_ACTION_TYPES.DELETE_START, deleteItem);
}

export function* onpanelFetchSingleStart() {
    yield takeLatest(panel_ACTION_TYPES.FETCH_SINGLE_START, fetchSinglepanel); 
}

export function* onpanelFetchAllStart() {
    yield takeLatest(panel_ACTION_TYPES.FETCH_ALL_START, fetchAllpanel);
}

export function* panelSagas() {
    yield all([
        call(onpanelCreateStart),
        call(onpanelUpdateStart),
        call(onpanelDeleteStart),
        call(onpanelFetchAllStart),
        call(onpanelFetchSingleStart)
    ]);
}