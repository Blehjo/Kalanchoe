import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleCommunity(communityId) {
  return await axios.get(`${api}/Community/${communityId}`)
}

export async function getCommunity() {
  return await axios.get(`${api}/Community`)
}

export async function addCommunity(community) {
    return await axios.post(`${api}/Community`, community, {
        config: headers
    })
}

export async function editCommunity(community) {
  return await axios.put(`${api}/Community/${community.id}`, community, {
    config: headers
  })
}

export async function deleteCommunity(communityId) {
  return await axios.delete(`${api}/Community/${communityId}`)
}