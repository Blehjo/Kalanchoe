import { Channel } from "../channel/channel.types";
import { Member } from "../member/member.types";
import { User } from "../user/user.types";

export enum COMMUNITY_ACTION_TYPES {
    CREATE_START = 'community/CREATE_START',
    CREATE_SUCCESS = 'community/CREATE_SUCCESS',
    CREATE_FAILED = 'community/CREATE_FAILED',
    UPDATE_START = 'community/UPDATE_START',
    UPDATE_SUCCESS = 'community/UPDATE_SUCCESS',
    UPDATE_FAILED = 'community/UPDATE_FAILED',
    DELETE_START = 'community/DELETE_START',
    DELETE_SUCCESS = 'community/DELETE_SUCCESS',
    DELETE_FAILED = 'community/DELETE_FAILED',
    FETCH_SINGLE_START = 'community/FETCH_SINGLE_START',
    FETCH_SINGLE_SUCCESS = 'community/FETCH_SINGLE_SUCCESS',
    FETCH_SINGLE_FAILED = 'community/FETCH_SINGLE_FAILED',
    FETCH_ALL_START = 'community/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'community/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'community/FETCH_ALL_FAILED'
};

export type Community = {
    communityId: number | null;
    groupName: string;
    description: string;
    mediaLink: string;
    imageFile: File | null;
    dateCreated: Date;
    userId: number;
    user: User;
    members: Member[];
    channels: Channel[];
}