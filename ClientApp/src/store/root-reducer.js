import { combineReducers } from 'redux';
import { aicompletionReducer } from './aicompletion/aicompletion.reducer';
import { channelReducer } from './channel/channel.reducer';
import { channelcommentReducer } from './channelcomment/channelcomment.reducer';
import { chatReducer } from './chat/chat.reducer';
import { chatcommentReducer } from './chatcomment/chatcomment.reducer';
import { commentReducer } from './comment/comment.reducer';
import { communityReducer } from './community/community.reducer';
import { followerReducer } from './follower/follower.reducer';
import { memberReducer } from './member/member.reducer';
import { messageReducer } from './message/message.reducer';
import { noteReducer } from './note/note.reducer';
import { panelReducer } from './panel/panel.reducer';
import { postReducer } from './post/post.reducer';
import { userReducer } from './user/user.reducer';
import { toolReducer } from './tool/tool.reducer';
import { listReducer } from './list/list.reducer';
import { toolboxReducer } from './toolbox/toolbox.reducer';
import { messagecommentReducer } from './messagecomment/messagecomment.reducer';
import { userprofileReducer } from './userprofiles/userprofile.reducer';
import { savedReducer } from './saved/saved.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    panel: panelReducer,
    note: noteReducer,
    message: messageReducer,
    member: memberReducer,
    follower: followerReducer,
    community: communityReducer,
    chatcomment: chatcommentReducer,
    chat: chatReducer,
    channelcomment: channelcommentReducer,
    channel: channelReducer,
    aicompletion: aicompletionReducer,
    tool: toolReducer,
    list: listReducer,
    toolbox: toolboxReducer,
    messagecomment: messagecommentReducer,
    userprofile: userprofileReducer,
    saved: savedReducer
});