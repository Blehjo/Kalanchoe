import axios from "axios";

export async function getSingleComment(commentId) {
  return await axios.get(`/comments/${commentId}`)
}

export async function getComments() {
  return await axios.get('/comments')
}

export async function addComment(comment) {
  return await axios.post('/comments', comment)
}

export async function editComment(comment) {
  return await axios.put(`/comments/${comment.id}`, comment)
}

export async function deleteComment(commentId) {
  return await axios.delete(`/comments/${commentId}`)
}