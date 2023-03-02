import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/post";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePost(postId) {
  return await axios({
    method: 'get',
    url: `${api}/${postId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getPosts() {
  return await axios({
    method: 'get',
    url: api,
    config: headers,
    withCredentials: true
  });
}

export async function getUserPosts(id) {
  return await axios({
    method: 'get',
    url: `${api}/user/${id}`,
    config: headers,
    withCredentials: true
  });
}

export async function addPost(post) {
  return await axios({
    method: 'post',
    url: api, 
    data: post,
    config: headers,
    withCredentials: true
  });
}

export async function editPost(post) {
  return await axios({
    method: 'put',
    url:`${api}/${post.id}`, 
    data: post,
    config: headers,
    withCredentials: true
  });
}

export async function deletePost(postId) {
  return await axios({
    method: 'delete',
    url: `${api}/${postId}`,
    config: headers,
    withCredentials: true
  });
}