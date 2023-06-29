import { all, call, put, takeLatest } from 'redux-saga/effects';

import { PANEL_ACTION_TYPES } from './panel.types';

import {
  panelCreateFailed,
  panelCreateSuccess,
  panelDeleteFailed,
  panelDeleteSuccess,
  panelFetchAllFailed,
  panelFetchAllSuccess,
  panelUpdateFailed,
  panelUpdateSuccess,
} from './panel.action';

import {
  addPanel,
  deletePanel,
  editPanel,
  getPanels
} from '../../utils/api/panel.api';

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

export function* fetchAllPanel() {
    try {
        const panel = yield call(getPanels);
        if (!panel) return;
        yield call(panelFetchAllSuccess, panel);
    } catch (error) {
        yield put(panelFetchAllFailed(error));
    }
}

export function* onpanelCreateStart() {
    yield takeLatest(PANEL_ACTION_TYPES.CREATE_START, createPanel);
}

export function* onpanelUpdateStart() {
    yield takeLatest(PANEL_ACTION_TYPES.UPDATE_START, updatePanel);
}

export function* onpanelDeleteStart() {
    yield takeLatest(PANEL_ACTION_TYPES.DELETE_START, deleteItem);
}

export function* onpanelFetchAllStart() {
    yield takeLatest(PANEL_ACTION_TYPES.FETCH_ALL_START, fetchAllPanel);
}

export function* panelSagas() {
    yield all([
        call(onpanelCreateStart),
        call(onpanelUpdateStart),
        call(onpanelDeleteStart),
        call(onpanelFetchAllStart)
    ]);
}