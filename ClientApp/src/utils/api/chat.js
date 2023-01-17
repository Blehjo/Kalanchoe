import axios from "axios";

export async function getSingleChat(chatId) {
  return await axios.get(`/chat/${chatId}`)
}

export async function getChats() {
  return await axios.get('/chat')
}

export async function addChat(chat) {
  return await axios.post('/chat', chat)
}

export async function editChat(chat) {
  return await axios.put(`/chat/${chat.id}`, chat)
}

export async function deleteChat(chatId) {
  return await axios.delete(`/chat/${chatId}`)
}