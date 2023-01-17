import axios from "axios";

export async function getSinglePanel(panelId) {
  return await axios.get(`/panels/${panelId}`)
}

export async function getPanels() {
  return await axios.get('/panels')
}

export async function addPanel(panel) {
  return await axios.post('/panels', panel)
}

export async function editPanel(panel) {
  return await axios.put(`/panels/${panel.id}`, panel)
}

export async function deletePanel(panelId) {
  return await axios.delete(`/panels/${panelId}`)
}