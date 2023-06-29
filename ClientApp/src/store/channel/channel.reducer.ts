import { AnyAction } from 'redux';

import { Channel } from './channel.types';
import { 
    channelCreateStart,
    channelCreateSuccess,
    channelCreateFailed,
    channelUpdateStart,
    channelUpdateSuccess,
    channelUpdateFailed,
    channelDeleteStart,
    channelDeleteSuccess,
    channelDeleteFailed,
    channelFetchSingleStart,
    channelFetchSingleSuccess,
    channelFetchSingleFailed,
    channelFetchAllStart,
    channelFetchAllSuccess,
    channelFetchAllFailed
} from './channel.action';

export type ChannelState = {
    readonly channelId: number | null;
    readonly singleChannel: Channel | null;
    readonly channels: Channel[] | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: ChannelState = {
    channelId: null,
    singleChannel: null,
    channels: [],
    isLoading: false,
    error: null,
};

export const channelReducer = (
    state = INITIAL_STATE, action: AnyAction
): ChannelState => {
    if (
        channelCreateStart.match(action) ||
        channelUpdateStart.match(action) ||
        channelDeleteStart.match(action) ||
        channelFetchSingleStart.match(action) ||
        channelFetchAllStart.match(action) 
    ) {
        return { ...state, isLoading: true }
    }
    if (
        channelFetchSingleSuccess.match(action) 
    ) {
        return { ...state, isLoading: false, singleChannel: action.payload };
    }
    if (
        channelCreateSuccess.match(action) ||
        channelUpdateSuccess.match(action) ||
        channelDeleteSuccess.match(action) ||
        channelFetchAllSuccess.match(action) 
    ) {
        return { ...state, isLoading: false, channels: action.payload };
    } 
    if (
        channelCreateFailed.match(action) ||
        channelUpdateFailed.match(action) ||
        channelDeleteFailed.match(action) ||
        channelFetchSingleFailed.match(action) ||
        channelFetchAllFailed.match(action) 
    ) {
      return { ...state, isLoading: false, error: action.payload };
    }
  
    return state;
};