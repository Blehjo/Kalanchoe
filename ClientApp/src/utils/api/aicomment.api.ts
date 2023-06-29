import axios from "axios";
import { AiComment } from "../../store/aicomment/aicomment.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/aicomment";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getAiComments(chatId: number): Promise<AiComment[]> {
  return await axios({
    method: 'get',
    url: `${api}/${chatId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addAiComment(commentValue: string, chatId: number): Promise<AiComment[]> {
  return await axios({
    method: 'post',
    url: api,
    data: {
      commentValue: commentValue,
      chatId: chatId
    },
    headers: headers,
    withCredentials: true
  });
}

export async function deleteAiComment(aiCommentId: number): Promise<AiComment[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${aiCommentId}`,
    headers: headers,
    withCredentials: true
  })
}