import axios from "axios";

const api = "https://localhost:7028/api/user"

export async function getSingleUser(userId) {
  return await axios.get(`${api}/${userId}`)
}

export async function getUsers() {
  return await axios.get(`${api}/`)
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
  return await axios.put(`${api}/${user.id}`, user)
}

export async function deleteUser(userId) {
  return await axios.delete(`${api}/${userId}`)
}