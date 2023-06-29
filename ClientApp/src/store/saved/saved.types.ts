import { User } from "../user/user.types";

export enum SAVED_ACTION_TYPES {
    CREATE_START = 'saved/CREATE_START',
    CREATE_SUCCESS = 'saved/CREATE_SUCCESS',
    CREATE_FAILED = 'saved/CREATE_FAILED',
    UPDATE_START = 'saved/UPDATE_START',
    UPDATE_SUCCESS = 'saved/UPDATE_SUCCESS',
    UPDATE_FAILED = 'saved/UPDATE_FAILED',
    DELETE_START = 'saved/DELETE_START',
    DELETE_SUCCESS = 'saved/DELETE_SUCCESS',
    DELETE_FAILED = 'saved/DELETE_FAILED',
    FETCH_SINGLE_START = 'saved/FETCH_SINGLE_START',
    FETCH_SINGLE_SUCCESS = 'saved/FETCH_SINGLE_SUCCESS',
    FETCH_SINGLE_FAILED = 'saved/FETCH_SINGLE_FAILED',
    FETCH_ALL_START = 'saved/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'saved/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'saved/FETCH_ALL_FAILED'
};

export type Saved = {
    savedId: number | null;
    title: string;
    link: string;
    mediaLink: string;
    imageFile: File | null;
    dateCreated: Date;
    userId: number;
    user: User;
}