import { all, call, put, takeLatest } from 'redux-saga/effects';

import { NOTE_ACTION_TYPES } from './note.types';

import {
  noteCreateFailed,
  noteCreateSuccess,
  noteFetchAllFailed,
  noteFetchAllSuccess,
} from './note.action';

import { addNote, getNotes, getSingleNote } from '../../utils/api/note.api';

export function* getSnapshotFromNote(note, additionalDetails) {
    try {
        const noteSnapshot = yield call(
            getSingleNote,
            note.noteId,
            additionalDetails
        );
        yield put(noteCreateSuccess({ id: noteSnapshot.noteId, ...noteSnapshot.data }));
    } catch (error) {
        yield put(noteCreateFailed(error));
    }
}

export function* createNote({ payload: { title } }) {
    try {
        const note = yield call(
            addNote,
            title,
        );
        yield call(getSnapshotFromNote, note);
    } catch (error) {
        yield put(noteCreateFailed(error));
    }
}

export function* getUserNotes() {
    try {
        const note = yield call(getNotes);
        if (!note) return;
        yield call(noteFetchAllSuccess, note);
    } catch (error) {
        yield put(noteFetchAllFailed(error));
    }
}

export function* onNoteStart() {
    yield takeLatest(NOTE_ACTION_TYPES.CREATE_START, createNote);
}

export function* onFetchStart() {
    yield takeLatest(NOTE_ACTION_TYPES.FETCH_ALL_START, getUserNotes);
}

export function* noteSagas() {
    yield all([
        call(onNoteStart),
        call(onFetchStart)
    ]);
}