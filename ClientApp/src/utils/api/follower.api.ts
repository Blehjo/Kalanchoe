import axios from "axios";
import { Follower } from "../../store/follower/follower.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/follower";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleFollower(followerId: number): Promise<Follower> {
  return await axios({
    method: 'get',
    url: `${api}/${followerId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getFollowers(): Promise<Follower[]> {
  return await axios({
    method: 'get',
    url: api, 
    headers: headers,
    withCredentials: true
  });
}

export async function getUserFollowers(userId: number): Promise<Follower[]> {
  return await axios({
    method: 'get',
    url: `${api}/users/${userId}`, 
    headers: headers,
    withCredentials: true
  });
}

export async function addFollower(follower: Follower): Promise<Follower[]> {
  return await axios({
    method: 'post',
    url: `${api}`,
    data: follower,
    headers: headers,
    withCredentials: true
  })
}

export async function deleteFollower(followerId: number): Promise<Follower[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${followerId}`,
    headers: headers,
    withCredentials: true
  });
}