import axios from "axios";
import { MessageComment } from "../../store/messagecomment/messagecomment.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/messagecomment";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleMessagecomment(messageId: number): Promise<MessageComment> {
  return await axios({
    method: 'get',
    url: `${api}/${messageId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getMessagecomments(): Promise<MessageComment[]> {
  return await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
}

export async function addMessagecomment(messagecomment: MessageComment): Promise<MessageComment[]> {
  return await axios({
    method: 'post',
    url: api,
    data: messagecomment,
    headers: headers,
    withCredentials: true
  });
}

export async function editMessagecomment(messagecomment: MessageComment): Promise<MessageComment[]> {
  return await axios({
    method: 'put',
    url: `${api}/${messagecomment.messageCommentId}`, 
    data: messagecomment,
    headers: headers,
    withCredentials: true
  });
}

export async function deleteMessagecomment(messagecommentId: number): Promise<MessageComment[]> {
  return await axios({ 
    method: 'delete',
    url: `${api}/${messagecommentId}`,
    headers: headers,
    withCredentials: true
  });
}