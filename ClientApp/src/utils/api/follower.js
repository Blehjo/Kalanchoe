import axios from "axios";

export async function getSingleFollower(followerId) {
  return await axios.get(`/followers/${followerId}`)
}

export async function getFollowers() {
  return await axios.get('/followers')
}

export async function addFollower(follower) {
  return await axios.post('/followers', follower)
}

export async function editFollower(follower) {
  return await axios.put(`/followers/${follower.id}`, follower)
}

export async function deleteFollower(followerId) {
  return await axios.delete(`/followers/${followerId}`)
}