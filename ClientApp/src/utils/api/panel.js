import axios from "axios";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePanel(panelId) {
  return await axios.get(`https://localhost:7028/api/Panel/${panelId}`)
}

export async function getPanels() {
  return await axios.get('https://localhost:7028/api/Panel')
}

export async function addPanel(panel) {
  return await axios.post('https://localhost:7028/api/Panel', panel, {
    config: headers
  });
}

export async function editPanel(panel) {
  return await axios.put(`https://localhost:7028/api/Panel/${panel.id}`, panel)
}

export async function deletePanel(panelId) {
  return await axios.delete(`https://localhost:7028/api/Panel/${panelId}`)
}