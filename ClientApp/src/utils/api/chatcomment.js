import axios from "axios";

export async function getSingleChatcomment(chatcommentId) {
  return await axios.get(`/chatcomments/${chatcommentId}`)
}

export async function getChatcomments() {
  return await axios.get('/chatcomments')
}

export async function addChatcomment(chatcomment) {
  return await axios.post('/chatcomments', chatcomment)
}

export async function editChatcomment(chatcomment) {
  return await axios.put(`/chatcomments/${chatcomment.id}`, chatcomment)
}

export async function deleteChatcomment(chatcommentId) {
  return await axios.delete(`/chatcomments/${chatcommentId}`)
}