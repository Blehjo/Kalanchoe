import axios from "axios";
import { Community } from "../../store/community/community.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/community";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleCommunity(communityId: number): Promise<Community> {
  return await axios({
    method: 'get',
    url: `${api}/${communityId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getCommunities(): Promise<Community[]> {
  return await axios({
    method: 'get',
    url: `${api}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getUserCommunities(userId: number): Promise<Community[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${userId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function addCommunity(community: Community): Promise<Community[]> {
  return await axios({
    method: 'post',
    url: api, 
    data: community, 
    headers: headers,
    withCredentials: true
  })
}

export async function editCommunity(community: Community): Promise<Community[]> {
  return await axios({
    method: 'put',
    url:`${api}/${community.communityId}`, 
    data: community, 
    headers: headers,
    withCredentials: true
  })
}

export async function deleteCommunity(communityId: number): Promise<Community[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${communityId}`,
    headers: headers,
    withCredentials: true
  })
}