import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChannel(channelId) {
  return await axios.get(`${api}/Channel/${channelId}`)
}

export async function getChannels() {
  return await axios.get(`${api}/Channel`)
}

export async function addChannel(channel) {
  return await axios.post(`${api}/Channel`, channel, {
    config: headers
  })
}

export async function editChannel(channel) {
  return await axios.put(`${api}/Channel/${channel.id}`, channel, {
    config: headers
  })
}

export async function deleteChannel(channelId) {
  return await axios.delete(`${api}/Channel/${channelId}`)
}