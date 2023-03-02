import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/channelcomment"

export async function getSingleChannelcomment(channelId) {
  return await axios({
    method: 'get',
    url: `${api}/${channelId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getChannelcomments() {
  return await axios({
    method: 'get',
    url: `${api}/`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addChannelComment(channelComment) {
  return await axios({
    method: 'post',
    url: api,
    data: channelComment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editChatcomment(channelcomment) {
  return await axios({
    method: 'put',
    url: `${api}/${channelcomment.id}`, 
    data: channelcomment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteChatcomment(channelcommentId) {
  return await axios({
    method: 'delete',
    url: `${api}/${channelcommentId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}