import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/community";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleCommunity(communityId) {
  return await axios({
    method: 'get',
    url: `${api}/${communityId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getCommunities() {
  return await axios({
    method: 'get',
    url: `${api}`,
    config: headers,
    withCredentials: true
  })
}

export async function getUserCommunities(id) {
  return await axios({
    method: 'get',
    url: `${api}/user/${id}`,
    config: headers,
    withCredentials: true
  })
}

export async function addCommunity(community) {
  return await axios({
    method: 'post',
    url: `${api}`, 
    data: community, 
    config: headers,
    withCredentials: true
  })
}

export async function editCommunity(community) {
  return await axios({
    method: 'put',
    url:`${api}/${community.id}`, 
    data: community, 
    config: headers,
    withCredentials: true
  })
}

export async function deleteCommunity(communityId) {
  return await axios({
    method: 'delete',
    url: `${api}/${communityId}`,
    config: headers,
    withCredentials: true
  })
}