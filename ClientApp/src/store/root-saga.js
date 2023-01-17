import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';
import { postSagas } from './post/post.saga';

// generator function
export function* rootSaga() {
    yield all([call(userSagas), call(postSagas)]);
}