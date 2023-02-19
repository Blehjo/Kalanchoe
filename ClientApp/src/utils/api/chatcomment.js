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
  return await axios.put(`/chatcomments/${chatcomment.id}`, chatcomment)
}

export async function deleteChatcomment(chatcommentId) {
  return await axios.delete(`/chatcomments/${chatcommentId}`)
}