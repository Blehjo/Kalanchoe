import { MESSAGECOMMENT_ACTION_TYPES, MessageComment } from './messagecomment.types';

import {
    Action,
    ActionWithPayload,
    createAction,
    withMatcher
} from '../../utils/reducer.utils';

export type MessageCommentCreateStart = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.CREATE_START, { messageId: number, messageValue: string, imageFile: File }
>;

export type MessageCommentCreateSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.CREATE_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentCreateFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.CREATE_FAILED,
    Error
>;

export type MessageCommentUpdateStart = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.UPDATE_START,
    { messageCommentId: number, messageValue: string, mediaLink: string }
>;

export type MessageCommentUpdateSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.UPDATE_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentUpdateFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.UPDATE_FAILED,
    Error
>;
   
export type MessageCommentDeleteStart = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.DELETE_START,
    { messageCommentId: number }
>;

export type MessageCommentDeleteSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.DELETE_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentDeleteteFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.DELETE_FAILED,
    Error
>;
   
export type MessageCommentFetchSingleStart = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_START,
    { messageId: number }
>;

export type MessageCommentFetchSingleSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentFetchSingleFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_FAILED,
    Error
>;

export type MessageCommentFetchUserMessagesStart = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_START,
    { userId: number }
>;

export type MessageCommentFetchUserMessagesSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentFetchUserMessagesFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_FAILED,
    Error
>;

export type MessageCommentFetchAllStart = Action<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START
>;

export type MessageCommentFetchAllSuccess = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, 
    MessageComment[]
>;

export type MessageCommentFetchAllFailed = ActionWithPayload<
    MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_FAILED,
    Error
>;

export const messagecommentCreateStart = withMatcher(
    (messageId: number, messageValue: string, imageFile: File): MessageCommentCreateStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_START, { messageId, messageValue, imageFile })
);

export const messagecommentCreateSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentCreateSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_SUCCESS, Message)
);

export const messagecommentCreateFailed = withMatcher(
    (error: Error) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.CREATE_START, error)
);
 
export const messagecommentUpdateStart = withMatcher(
    (messageCommentId: number, messageValue: string, mediaLink: string): MessageCommentUpdateStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.UPDATE_START, { messageCommentId, messageValue, mediaLink })
);

export const messagecommentUpdateSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentUpdateSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.UPDATE_SUCCESS, Message)
);

export const messagecommentUpdateFailed = withMatcher(
    (error: Error): MessageCommentUpdateFailed => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.UPDATE_FAILED, error)
);

export const messagecommentDeleteStart = withMatcher(
    (messageCommentId: number): MessageCommentDeleteStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_START, { messageCommentId })
);

export const messagecommentDeleteSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentDeleteSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_SUCCESS, Message)
);

export const messagecommentDeleteFailed = withMatcher(
    (error: Error) => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.DELETE_START, error)
);

export const messagecommentFetchSingleStart = withMatcher(
    (messageId: number): MessageCommentFetchSingleStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_START, { messageId })
);

export const messagecommentFetchSingleSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentFetchSingleSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_SUCCESS, Message)
);

export const messagecommentFetchSingleFailed = withMatcher(
    (error: Error): MessageCommentFetchSingleFailed => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_SINGLE_FAILED, error)
);

export const messagecommentFetchUserMessagesStart = withMatcher(
    (userId: number): MessageCommentFetchUserMessagesStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_START, { userId })
);

export const messagecommentFetchUserMessagesSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentFetchUserMessagesSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_SUCCESS, Message)
);

export const messagecommentFetchUserMessagesFailed = withMatcher(
    (error: Error): MessageCommentFetchUserMessagesFailed => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_USER_MESSAGECOMMENTS_FAILED, error)
);

export const messagecommentFetchAllStart = withMatcher(
    (Message: MessageComment[]): MessageCommentFetchAllStart => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_START, Message)
);

export const messagecommentFetchAllSuccess = withMatcher(
    (Message: MessageComment[]): MessageCommentFetchAllSuccess => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_SUCCESS, Message)
);

export const messagecommentFetchAllFailed = withMatcher(
    (error: Error): MessageCommentFetchAllFailed => 
    createAction(MESSAGECOMMENT_ACTION_TYPES.FETCH_ALL_FAILED, error)
);