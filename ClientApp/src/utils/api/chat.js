import axios from "axios";

const api = "https://localhost:7028/api/chat";

export async function getSingleChat(chatId) {
  return await axios({
    method: 'get',
    url: `${api}/${chatId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getAllChats() {
  return await axios({
    method: 'get',
    url: api,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getChats() {
  return await axios({
    method: 'get',
    url: `${api}/user`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addChat(chat) {
  const { title } = chat;
  return await axios({
    method: 'post',
    url: api,
    data: {
      title: title,
    },
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editChat(chat) {
  return await axios({
    method: 'put',
    url: `${api}/${chat.id}`, 
    data: chat,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteChat(chatId) {
  return await axios({
    method: 'delete',
    url: `${api}/${chatId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}