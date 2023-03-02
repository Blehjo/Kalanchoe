import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/message";

export async function getSingleMessage(messageId) {
  return await axios({
    method: 'get',
    url: `${api}/${messageId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getAllMessages() {
  return await axios({
    method: 'get',
    url: api,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addMessage(message) {
  const { title } = message;
  return await axios({
    method: 'post',
    url: api,
    data: message,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editMessage(message) {
  return await axios({ 
    method: 'put',
    url: `${api}/${message.id}`, 
    data: message,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteMessage(messageId) {
  return await axios({
    method: 'delete',
    url: `${api}/${messageId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}