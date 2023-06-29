import { Community } from "../community/community.types";
import { User } from "../user/user.types";

export enum MEMBER_ACTION_TYPES {
    CREATE_START = 'member/CREATE_START',
    CREATE_SUCCESS = 'member/CREATE_SUCCESS',
    CREATE_FAILED = 'member/CREATE_FAILED',
    UPDATE_START = 'member/UPDATE_START',
    UPDATE_SUCCESS = 'member/UPDATE_SUCCESS',
    UPDATE_FAILED = 'member/UPDATE_FAILED',
    DELETE_START = 'member/DELETE_START',
    DELETE_SUCCESS = 'member/DELETE_SUCCESS',
    DELETE_FAILED = 'member/DELETE_FAILED',
    FETCH_ALL_START = 'member/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'member/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'member/FETCH_ALL_FAILED'
};

export type Member = {
    memberId: number | null;
    dateCreated: Date;
    communityId: number;
    communiy: Community;
    userId: number;
    user: User;
}