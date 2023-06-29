import axios from "axios";
import { ChannelComment } from "../../store/channelcomment/channelcomment.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/channelcomment";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleChannelcomment(channelId: number): Promise<ChannelComment[]> {
  return await axios({
    method: 'get',
    url: `${api}/${channelId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addChannelComment(channelComment: ChannelComment): Promise<ChannelComment[]> {
  return await axios({
    method: 'post',
    url: api,
    data: channelComment,
    headers: headers,
    withCredentials: true
  });
}

export async function editChatcomment(channelcomment: ChannelComment): Promise<ChannelComment[]> {
  return await axios({
    method: 'put',
    url: `${api}/${channelcomment.channelCommentId}`, 
    data: channelcomment,
    headers: headers,
    withCredentials: true
  })
}

export async function deleteChatcomment(channelcommentId: number): Promise<ChannelComment[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${channelcommentId}`,
    headers: headers,
    withCredentials: true
  })
}