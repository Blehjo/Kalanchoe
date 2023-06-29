import { AiComment } from "../aicomment/aicomment.types";
import { ChatComment } from "../chatcomment/chatcomment.types";
import { User } from "../user/user.types";

export enum CHAT_ACTION_TYPES {
    CREATE_START = 'chat/CREATE_START',
    CREATE_SUCCESS = 'chat/CREATE_SUCCESS',
    CREATE_FAILED = 'chat/CREATE_FAILED',
    UPDATE_START = 'chat/UPDATE_START',
    UPDATE_SUCCESS = 'chat/UPDATE_SUCCESS',
    UPDATE_FAILED = 'chat/UPDATE_FAILED',
    DELETE_START = 'chat/DELETE_START',
    DELETE_SUCCESS = 'chat/DELETE_SUCCESS',
    DELETE_FAILED = 'chat/DELETE_FAILED',
    FETCH_ALL_START = 'chat/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'chat/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'chat/FETCH_ALL_FAILED'
};

export type Chat = {
    chatId: number | null;
    title: string;
    dateCreated: Date;
    user: User;
    chatComments: ChatComment[];
    aiComments: AiComment[];
}