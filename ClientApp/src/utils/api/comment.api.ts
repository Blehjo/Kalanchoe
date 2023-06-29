import axios from "axios";
import { Comment } from "../../store/comment/comment.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/comment";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleComment(postId: number): Promise<Comment[]> {
  return await axios({
    method: 'get',
    url: `${api}/post/${postId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addComment(comment: Comment): Promise<Comment[]> {
  return await axios({
    method: 'post',
    url: api,
    data: comment,
    headers: headers,
    withCredentials: true
  });
}

export async function deletecomment(commentId: number): Promise<Comment[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${commentId}`,
    headers: headers,
    withCredentials: true
  })
}