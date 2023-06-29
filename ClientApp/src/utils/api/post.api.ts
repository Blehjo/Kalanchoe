import axios from "axios";
import { Post } from "../../store/post/post.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/post";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePost(postId: number): Promise<Post> {
  return await axios({
    method: 'get',
    url: `${api}/${postId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getPosts(): Promise<Post[]> {
  return await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
}

export async function getUserPosts(userId: number): Promise<Post[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${userId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function addPost(post: Post): Promise<Post[]> {
  return await axios({
    method: 'post',
    url: api, 
    data: post,
    headers: headers,
    withCredentials: true
  });
}

export async function editPost(post: Post): Promise<Post[]> {
  return await axios({
    method: 'put',
    url:`${api}/${post.postId}`, 
    data: post,
    headers: headers,
    withCredentials: true
  });
}

export async function deletePost(postId: number): Promise<Post[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${postId}`,
    headers: headers,
    withCredentials: true
  });
}