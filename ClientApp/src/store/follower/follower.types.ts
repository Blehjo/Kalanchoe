import { User } from "../user/user.types";

export enum FOLLOWER_ACTION_TYPES {
    CREATE_START = 'follower/CREATE_START',
    CREATE_SUCCESS = 'follower/CREATE_SUCCESS',
    CREATE_FAILED = 'follower/CREATE_FAILED',
    UPDATE_START = 'follower/UPDATE_START',
    UPDATE_SUCCESS = 'follower/UPDATE_SUCCESS',
    UPDATE_FAILED = 'follower/UPDATE_FAILED',
    DELETE_START = 'follower/DELETE_START',
    DELETE_SUCCESS = 'follower/DELETE_SUCCESS',
    DELETE_FAILED = 'follower/DELETE_FAILED',
    FETCH_ALL_START = 'follower/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'follower/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'follower/FETCH_ALL_FAILED',
};

export type Follower = {
    followerId: number | null;
    followerUser: number;
    userId: number;
    user: User;
}