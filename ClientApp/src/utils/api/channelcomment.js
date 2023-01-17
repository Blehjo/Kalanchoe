import axios from "axios";

export async function getSingleChannelcomment(channelcommentId) {
  return await axios.get(`/channelcomments/${channelcommentId}`)
}

export async function getChannelcomments() {
  return await axios.get('/channelcomments')
}

export async function addChannelcomment(channelcomment) {
  return await axios.post('/channelcomments', channelcomment)
}

export async function editChannelcomment(channelcomment) {
  return await axios.put(`/channelcomments/${channelcomment.id}`, channelcomment)
}

export async function deleteChannelcomment(channelcommentId) {
  return await axios.delete(`/channelcomments/${channelcommentId}`)
}