import axios from "axios";
import { Channel } from "../../store/channel/channel.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/channel";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChannel(channelId: number): Promise<Channel> {
  return await axios({
    method: 'get',
    url: `${api}/${channelId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getCommunityChannels(id: number): Promise<Channel[]> {
  return await axios({
    method: 'get',
    url: `${api}/community/${id}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addChannel(channel: Channel): Promise<Channel[]> {
  return await axios({
    method: 'post',
    url: api, 
    data: {
      description: channel.channelComment,
      communityId: channel.communityId
    }, 
    headers: headers,
    withCredentials: true
  })
}

export async function editChannel(channel: Channel): Promise<Channel[]> {
  return await axios({
    method: 'put',
    url: `${api}/${channel.channelId}`, 
    data: channel, 
    headers: headers,
    withCredentials: true
  })
}

export async function deleteChannel(channelId: number): Promise<Channel[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${channelId}`,
    headers: headers,
    withCredentials: true
})
}