import { ChannelComment } from "../channelcomment/channelcomment.types";
import { Community } from "../community/community.types";

export enum CHANNEL_ACTION_TYPES {
    CREATE_START = 'channel/CREATE_START',
    CREATE_SUCCESS = 'channel/CREATE_SUCCESS',
    CREATE_FAILED = 'channel/CREATE_FAILED',
    UPDATE_START = 'channel/UPDATE_START',
    UPDATE_SUCCESS = 'channel/UPDATE_SUCCESS',
    UPDATE_FAILED = 'channel/UPDATE_FAILED',
    DELETE_START = 'channel/DELETE_START',
    DELETE_SUCCESS = 'channel/DELETE_SUCCESS',
    DELETE_FAILED = 'channel/DELETE_FAILED',
    FETCH_SINGLE_START = 'channel/FETCH_SINGLE_START',
    FETCH_SINGLE_SUCCESS = 'channel/FETCH_SINGLE_SUCCESS',
    FETCH_SINGLE_FAILED = 'channel/FETCH_SINGLE_FAILED',
    FETCH_ALL_START = 'channel/FETCH_ALL_START',
    FETCH_ALL_SUCCESS = 'channel/FETCH_ALL_SUCCESS',
    FETCH_ALL_FAILED = 'channel/FETCH_ALL_FAILED'
};

export type Channel = {
    channelId: number | null;
    description: string;
    dateCreated: Date | null;
    communityId: number;
    community: Community;
    channelComment: ChannelComment[];
}