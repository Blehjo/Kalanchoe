export enum CHATCOMMENT_ACTION_TYPES {
    CREATE_START = 'chatcomment/CREATE_START',
    CREATE_SUCCESS = 'chatcomment/CREATE_SUCCESS',
    CREATE_FAILED = 'chatcomment/CREATE_FAILED',
    DELETE_START = 'chatcomment/DELETE_START',
    DELETE_SUCCESS = 'chatcomment/DELETE_SUCCESS',
    DELETE_FAILED = 'chatcomment/DELETE_FAILED',
    FETCH_ALL_START = 'chatcomment/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'chatcomment/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'chatcomment/FETCH_ALL_FAILED'
};

export type ChatComment = {
    chatCommentId: number | null;
    chatValue: string;
    imageFile: File | null;
    dateCreated: Date;
    chatId: number;
}