import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/aicomment"

export async function getSingleAiComment(chatId) {
  return await axios({
    method: 'get',
    url: `${api}/user/${chatId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getAiComments() {
  return await axios({
    method: 'get',
    url: api,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addAiComment(aiComment) {
  const { commentValue, chatId } = aiComment;
  return await axios({
    method: 'post',
    url: api,
    data: {
      commentValue: commentValue,
      chatId: chatId
    },
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editAiComment(aicomment) {
  return await axios({
    method: 'put',
    url: `${api}/${aicomment.id}`, 
    data: aicomment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteAiComment(aicommentId) {
  return await axios({
    method: 'delete',
    url: `${api}/${aicommentId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}