import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/follower";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleFollower(followerId) {
  return await axios({
    method: 'get',
    url: `${api}/${followerId}`,
    config: headers,
    withCredentials: true
  });
}

export async function getFollowers() {
  return await axios({
    method: 'get',
    url: api, 
    config: headers,
    withCredentials: true
  });
}

export async function getUserFollowers() {
  return await axios({
    method: 'get',
    url: `${api}/users`, 
    config: headers,
    withCredentials: true
  });
}

export async function addFollower(follower) {
  return await axios({
    method: 'post',
    url: `${api}`,
    data: follower,
    config: headers,
    withCredentials: true
  })
}

export async function editFollower(follower) {
  return await axios({
    method: 'put',
    url: `${api}/${follower.id}`,
    data: follower,
    config: headers,
    withCredentials: true
  });
}

export async function deleteFollower(followerId) {
  return await axios({
    method: 'delete',
    url: `${api}/${followerId}`,
    config: headers,
    withCredentials: true
  });
}