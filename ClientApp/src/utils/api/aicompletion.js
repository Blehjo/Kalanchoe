import axios from "axios";

export async function getSingleAicompletion(aicompletionId) {
  return await axios.get(`/aicompletions/${aicompletionId}`)
}

export async function getAicompletions() {
  return await axios.get('/aicompletions')
}

export async function addAicompletion(aicompletion) {
  return await axios.post('/aicompletions', aicompletion)
}

export async function editAicompletion(aicompletion) {
  return await axios.put(`/aicompletions/${aicompletion.id}`, aicompletion)
}

export async function deleteAicompletion(aicompletionId) {
  return await axios.delete(`/aicompletions/${aicompletionId}`)
}