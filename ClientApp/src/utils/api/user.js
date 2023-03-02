import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/user"

export async function getSingleUser(userId) {
  return await axios({
    method: 'get',
    url:`${api}/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function getUsers() {
  return await axios({
    method: 'get',
    url: api,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function addUser(user) {
  return await axios({
    method: 'post',
    url: api,
    data: user,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function editUser(user) {
  return await axios({
    method: 'put',
    url: `${api}/${user.id}`, 
    data: user,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deleteUser(userId) {
  return await axios({
    method: 'delete',
    url: `${api}/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}