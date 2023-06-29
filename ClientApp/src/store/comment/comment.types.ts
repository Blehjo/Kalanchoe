import { Post } from "../post/post.types";
import { User } from "../user/user.types";

export enum COMMENT_ACTION_TYPES {
    CREATE_START = 'comment/CREATE_START',
    CREATE_SUCCESS = 'comment/CREATE_SUCCESS',
    CREATE_FAILED = 'comment/CREATE_FAILED',
    UPDATE_START = 'comment/UPDATE_START',
    UPDATE_SUCCESS = 'comment/UPDATE_SUCCESS',
    UPDATE_FAILED = 'comment/UPDATE_FAILED',
    DELETE_START = 'comment/DELETE_START',
    DELETE_SUCCESS = 'comment/DELETE_SUCCESS',
    DELETE_FAILED = 'comment/DELETE_FAILED',
    FETCH_ALL_START = 'comment/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'comment/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'comment/FETCH_ALL_FAILED'
};

export type Comment = {
    commentId: number | null;
    commentValue: string;
    mediaLink: string;
    imageFile: File | null;
    userId: number;
    user: User;
    postId: number;
    post: Post;
}