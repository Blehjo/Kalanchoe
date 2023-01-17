import axios from "axios";

export async function getSingleMessage(messageId) {
  return await axios.get(`/messages/${messageId}`)
}

export async function getMessages() {
  return await axios.get('/messages')
}

export async function addMessage(message) {
  return await axios.post('/messages', message)
}

export async function editMessage(message) {
  return await axios.put(`/messages/${message.id}`, message)
}

export async function deleteMessage(messageId) {
  return await axios.delete(`/messages/${messageId}`)
}