import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';
import { postSagas } from './post/post.saga';
import { chatSagas } from './chat/chat.saga';
import { chatCommentSagas } from './chatcomment/chatcomment.saga';
import { messageCommentSagas } from './messagecomment/messagecomment.saga';
import { messageSagas } from './message/message.saga';
import { channelSagas } from './channel/channel.saga';
import { channelcommentSagas } from './channelcomment/channelcomment.saga';
import { panelSagas } from './panel/panel.saga';
import { userprofileSagas } from './userprofiles/userprofile.saga';
import { communitySagas } from './community/community.saga';
import { noteSagas } from './note/note.saga';
import { commentSagas } from './comment/comment.saga';

// generator function
export function* rootSaga() {
    yield all([
        call(userSagas), 
        call(postSagas), 
        call(panelSagas),
        call(chatSagas), 
        call(chatCommentSagas),
        call(messageSagas),
        call(messageCommentSagas),
        call(channelSagas),
        call(channelcommentSagas),
        call(userprofileSagas),
        call(communitySagas),
        call(noteSagas),
        call(commentSagas)
    ]);
}