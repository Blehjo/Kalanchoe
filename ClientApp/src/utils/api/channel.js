import axios from "axios";

const api = "https://localhost:7028/api/channel";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChannel(channelId) {
  return await axios.get({
    method: 'get',
    url: `${api}/${channelId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getChannels() {
  return await axios({
    method: 'get',
    url: `${api}`,
    config: headers,
    withCredentials: true
  });
}

export async function addChannel(channel) {
  return await axios({
    method: 'post',
    url: `${api}`, 
    data: channel, 
    config: headers,
    withCredentials: true
  })
}

export async function editChannel(channel) {
  return await axios({
    method: 'put',
    url: `${api}/${channel.id}`, 
    data: channel, 
    config: headers,
    withCredentials: true
  })
}

export async function deleteChannel(channelId) {
  return await axios({
    method: 'delete',
    url: `${api}/${channelId}`,
    config: headers,
    withCredentials: true
})
}