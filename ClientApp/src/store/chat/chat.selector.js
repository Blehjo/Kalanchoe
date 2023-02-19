import { createSelector } from 'reselect';

export const selectChatReducer = (state) => state.chat;

export const selectChatItems = createSelector(
  [selectChatReducer],
  (chat) => chat.chats
);