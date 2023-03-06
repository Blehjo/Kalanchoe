import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/channel";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChannel(channelId) {
  return await axios({
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

export async function getCommunityChannels(id) {
  return await axios({
    method: 'get',
    url: `${api}/community/${id}`,
    config: headers,
    withCredentials: true
  });
}

export async function addChannel(channel) {
  console.log("Channel content: ", channel)
  return await axios({
    method: 'post',
    url: api, 
    data: {
      description: channel.value,
      communityId: channel.id
    }, 
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