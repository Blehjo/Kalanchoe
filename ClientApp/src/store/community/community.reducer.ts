import { AnyAction } from 'redux';

import { Community } from './community.types';

import {
    communityCreateFailed,
    communityCreateStart,
    communityCreateSuccess,
    communityDeleteFailed,
    communityDeleteSuccess,
    communityFetchAllFailed,
    communityFetchAllStart,
    communityFetchAllSuccess,
    communityFetchOtherUsercommunitiesStart,
    communityFetchOtherUsercommunitiesSuccess,
    communityFetchSingleFailed,
    communityFetchSingleStart,
    communityFetchSingleSuccess,
    communityFetchUsercommunitiesStart,
    communityFetchUsercommunitiesSuccess,
    communityUpdateFailed,
    communityUpdateSuccess
} from './community.action';

export type CommunityState = {
    readonly communityId: number | null;
    readonly singleCommunity: Community | null;
    readonly userCommunities: Community[];
    readonly communities: Community[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};

const INITIAL_STATE: CommunityState = {
    communityId: null,
    singleCommunity: null,
    userCommunities: [],
    communities: [],
    isLoading: false,
    error: null
};

export const communityReducer = (
    state = INITIAL_STATE, action: AnyAction
): CommunityState => {
    if (
        communityFetchAllStart.match(action) ||
        communityFetchSingleStart.match(action) ||
        communityFetchUsercommunitiesStart.match(action) ||
        communityFetchOtherUsercommunitiesStart.match(action) ||
        communityCreateStart.match(action)
    ) {
        return { ...state, isLoading: true }
    }
    if (
        communityFetchUsercommunitiesSuccess.match(action) 
    ) {
        return { ...state, isLoading: false, userCommunities: action.payload }
    }
    if (
        communityUpdateSuccess.match(action) ||
        communityFetchSingleSuccess.match(action)
    ) {
        return { ...state, isLoading: false, singleCommunity: action.payload }
    }
    if (
        communityFetchAllSuccess.match(action) || 
        communityFetchOtherUsercommunitiesSuccess.match(action)
    ) {
        return { ...state, isLoading: false, communities: action.payload };
    } 
    if (
        communityCreateSuccess.match(action) ||
        communityDeleteSuccess.match(action)
    ) {
        return { ...state, isLoading: false, userCommunities: action.payload };
    } 
    if (
        communityCreateFailed.match(action) ||
        communityUpdateFailed.match(action) ||
        communityDeleteFailed.match(action) ||
        communityFetchSingleFailed.match(action) ||
        communityFetchAllFailed.match(action) 
    ) {
      return { ...state, isLoading: false, error: action.payload };
    }
  
    return state;
};