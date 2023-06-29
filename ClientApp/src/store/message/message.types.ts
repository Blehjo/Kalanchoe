import { MessageComment } from "../messagecomment/messagecomment.types";
import { User } from "../user/user.types";

export enum MESSAGE_ACTION_TYPES {
    CREATE_START = 'message/CREATE_START',
    CREATE_SUCCESS = 'message/CREATE_SUCCESS',
    CREATE_FAILED = 'message/CREATE_FAILED',
    UPDATE_START = 'message/UPDATE_START',
    UPDATE_SUCCESS = 'message/UPDATE_SUCCESS',
    UPDATE_FAILED = 'message/UPDATE_FAILED',
    DELETE_START = 'message/DELETE_START',
    DELETE_SUCCESS = 'message/DELETE_SUCCESS',
    DELETE_FAILED = 'message/DELETE_FAILED',
    FETCH_ALL_START = 'message/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'message/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'message/FETCH_ALL_FAILED'
};

export type Message = {
    messageId: number | null;
    messageValue: string;
    dateCreated: Date;
    userId: number;
    user: User;
    messageComments: MessageComment[];
}