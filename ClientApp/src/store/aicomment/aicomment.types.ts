import { Chat } from "../chat/chat.types";

export enum AICOMMENT_ACTION_TYPES {
    CREATE_START = 'aicomment/CREATE_START',
    CREATE_SUCCESS = 'aicomment/CREATE_SUCCESS',
    CREATE_FAILED = 'aicomment/CREATE_FAILED',
    DELETE_START = 'aicomment/DELETE_START',
    DELETE_SUCCESS = 'aicomment/DELETE_SUCCESS',
    DELETE_FAILED = 'aicomment/DELETE_FAILED',
    FETCH_ALL_START = 'aicomment/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'aicomment/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'aicomment/FETCH_ALL_FAILED',
};

export type AiComment = {
    aiCommentId: number | null;
    commentValue: string;
    dateCreated: Date;
    chatId: number | null;
    chat: Chat;
}