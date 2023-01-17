import axios from "axios";

export async function getSingleCompletion(completionId) {
  return await axios.get(`/completions/${completionId}`)
}

export async function getCompletions() {
  return await axios.get('/completions')
}

export async function addCompletion(completion) {
  return await axios.post('/completions', completion)
}

export async function editCompletion(completion) {
  return await axios.put(`/completions/${completion.id}`, completion)
}

export async function deleteCompletion(completionId) {
  return await axios.delete(`/completions/${completionId}`)
}