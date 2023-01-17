import axios from "axios";

export async function getSingleChannels(channelId) {
  return await axios.get(`/channels/${channelId}`)
}

export async function getChannels() {
  return await axios.get('/channels')
}

export async function addChannels(channels) {
  return await axios.post('/channels', channels)
}

export async function editChannels(channels) {
  return await axios.put(`/channels/${channels.id}`, channels)
}

export async function deleteChannels(channelId) {
  return await axios.delete(`/channels/${channelId}`)
}