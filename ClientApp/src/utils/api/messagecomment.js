import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/messagecomment"

export async function getSingleMessagecomment(messageId) {
  return await axios({
    method: 'get',
    url: `${api}/${messageId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getMessagecomments() {
  return await axios({
    method: 'get',
    url: api,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addMessagecomment(messagecomment) {
  return await axios({
    method: 'post',
    url: api,
    data: messagecomment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editMessagecomment(messagecomment) {
  return await axios({
    method: 'put',
    url: `${api}/${messagecomment.id}`, 
    data: messagecomment,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function deleteMessagecomment(messagecommentId) {
  return await axios({ 
    method: 'delete',
    url: `${api}/${messagecommentId}`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}