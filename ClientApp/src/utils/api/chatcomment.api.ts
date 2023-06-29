import axios from "axios";
import { ChatComment } from "../../store/chatcomment/chatcomment.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/chatcomment";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChatcomment(chatId: number): Promise<ChatComment[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${chatId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addChatComment(chatComment: ChatComment): Promise<ChatComment[]> {
  const { chatValue, chatId } = chatComment;
  return await axios({
    method: 'post',
    url: api,
    data: {
      chatValue: chatValue,
      chatId: chatId
    },
    headers: headers,
    withCredentials: true
  });
}

export async function deleteChatcomment(chatCommentId: number): Promise<ChatComment[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${chatCommentId}`,
    headers: headers,
    withCredentials: true
  })
}