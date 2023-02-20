import axios from "axios";

const api = "https://localhost:7028/api/chatcomment"

export async function getSingleChatcomment(chatId) {
  return await axios({
    method: 'get',
    url: `${api}/user/${chatId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getChatcomments() {
  return await axios({
    method: 'get',
    url: `${api}/`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addChatComment(chatComment) {
  const { chatValue, chatId } = chatComment;
  console.log("chatComment: ", chatComment)
  return await axios({
    method: 'post',
    url: api,
    data: {
      chatValue: chatValue,
      chatId: chatId
    },
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editChatcomment(chatcomment) {
  return await axios({
    method: 'put',
    url: `${api}/${chatcomment.id}`, 
    data: chatcomment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteChatcomment(chatcommentId) {
  return await axios({
    method: 'delete',
    url: `${api}/${chatcommentId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}