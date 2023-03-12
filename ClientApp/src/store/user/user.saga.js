import { takeLatest, put, all, call } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { 
    signInSuccess, 
    signInFailed, 
    signUpSuccess, 
    signUpFailed, 
    signOutSuccess, 
    signOutFailed 
} from './user.action';

import { 
    getUser, 
    login, 
    signUpUser, 
    signOutUser
} from '../../utils/userDocument';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
      const userSnapshot = yield call(
        getUser,
        userAuth,
        additionalDetails
      );
      yield put(signInSuccess({ id: userSnapshot.data.userId, ...userSnapshot.data }));
    } catch (error) {
      yield put(signInFailed(error));
    }
}

export function* signInWithEmail({ payload: { username, password } }) {
    try {
        const user = yield call(
            login,
            username,
            password
        );
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
   try {
       const userAuth = yield call(getUser);
       if (!userAuth) return;
       yield call(getSnapshotFromUserAuth, userAuth);
   } catch (error) {
       yield put(signInFailed(error));
   }
}

export function* signUp({ payload: formData }) {
   try {
        const user = yield call(
           signUpUser,
           formData
        );
        yield put(signUpSuccess(user));
    } catch (error) {
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user } }) {
   yield call(getSnapshotFromUserAuth, user );
}

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onCheckUserSession() {
   yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
   yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
   yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
   yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
   yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
   yield all([
       call(onCheckUserSession),
       call(onEmailSignInStart),
       call(onSignUpStart),
       call(onSignUpSuccess),
       call(onSignOutStart),
   ]);
}