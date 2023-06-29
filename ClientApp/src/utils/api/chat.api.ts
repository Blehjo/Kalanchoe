import axios from "axios";
import { Chat } from "../../store/chat/chat.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/chat";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChat(chatId: number): Promise<Chat> {
  return await axios({
    method: 'get',
    url: `${api}/${chatId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getAllChats(): Promise<Chat[]> {
  return await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
}

export async function getUserChats(userId: number): Promise<Chat[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${userId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getUsersChats(): Promise<Chat[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/chats`,
    headers: headers,
    withCredentials: true
  });
}

export async function getChats(): Promise<Chat[]> {
  return await axios({
    method: 'get',
    url: `${api}/user`,
    headers: headers,
    withCredentials: true
  });
}

export async function addChat(chat: Chat): Promise<Chat[]> {
  const { title } = chat;
  return await axios({
    method: 'post',
    url: api,
    data: {
      title: title,
    },
    headers: headers,
    withCredentials: true
  });
}

export async function deleteChat(chatId: number): Promise<Chat[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${chatId}`,
    headers: headers,
    withCredentials: true
  });
}