import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/comment"

export async function getSingleComment(postId) {
  return await axios({
    method: 'get',
    url: `${api}/post/${postId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getComments() {
  return await axios({
    method: 'get',
    url: `${api}/`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addComment(comment) {
  return await axios({
    method: 'post',
    url: api,
    data: comment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function editcomment(comment) {
  return await axios({
    method: 'put',
    url: `${api}/${comment.commentId}`, 
    data: comment,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export async function deletecomment(commentId) {
  return await axios({
    method: 'delete',
    url: `${api}/${commentId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}