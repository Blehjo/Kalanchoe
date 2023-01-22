import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePost(postId) {
  return await axios.get(`${api}/Post/${postId}`)
}

export async function getPosts() {
  return await axios.get(`${api}/Post`);
}

export async function addPost(post) {
  const { postValue, mediaLink } = post;
  const data = {
    userId: 1,
    postValue: postValue,
    mediaLink: mediaLink
  }
  return await axios.post(`${api}Post`, data, {
    config: headers,
  });
}

export async function editPost(post) {
  return await axios.put(`${api}/Post/${post.id}`, ...post, {
    config: headers,
  })
}

export async function deletePost(postId) {
  return await axios.delete(`${api}/Post/${postId}`)
}