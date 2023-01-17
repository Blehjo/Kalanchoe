import axios from "axios";

export async function getSingleUser(userId) {
  return await axios.get(`/users/${userId}`)
}

export async function getUsers() {
  return await axios.get('/users')
}

export async function addUser(user) {
  return await axios.User('/users', user)
}

export async function editUser(user) {
  return await axios.put(`/users/${user.id}`, user)
}

export async function deleteUser(userId) {
  return await axios.delete(`/users/${userId}`)
}