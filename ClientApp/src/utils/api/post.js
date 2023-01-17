import axios from "axios";

export async function getSinglePost(postId) {
  return await axios.get(`/posts/${postId}`)
}

export async function getPosts() {
  return await axios.get('/posts')
}

export async function addPost(post) {
  return await axios.post('/posts', post)
}

export async function editPost(post) {
  return await axios.put(`/posts/${post.id}`, post)
}

export async function deletePost(postId) {
  return await axios.delete(`/posts/${postId}`)
}