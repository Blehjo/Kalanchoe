import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';
import { postSagas } from './post/post.saga';
import { chatSagas } from './chat/chat.saga';
import { chatCommentSagas } from './chatcomment/chatcomment.saga';
import { messageCommentSagas } from './messagecomment/messagecomment.saga';
import { messageSagas } from './message/message.saga';
import { channelSagas } from './channel/channel.saga';
import { channelcommentSagas } from './channelcomment/channelcomment.saga';

// generator function
export function* rootSaga() {
    yield all([
        call(userSagas), 
        call(postSagas), 
        call(chatSagas), 
        call(chatCommentSagas),
        call(messageSagas),
        call(messageCommentSagas),
        call(channelSagas),
        call(channelcommentSagas)
    ]);
}