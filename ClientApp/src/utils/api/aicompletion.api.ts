import axios from "axios";

export async function getSingleAicompletion(aicompletionId: number) {
  return await axios.get(`/Chatgpt/${aicompletionId}`)
}

export async function getAicompletions() {
  return await axios.get('/aicompletions')
}

export async function addAicompletion(aicompletion: string) {
  return await axios.post('/aicompletions', aicompletion)
}

export async function editAicompletion(aicompletionId: number, aicompletion: string) {
  return await axios.put(`/aicompletions/${aicompletionId}`, aicompletion)
}

export async function deleteAicompletion(aicompletionId: string) {
  return await axios.delete(`/aicompletions/${aicompletionId}`)
}