import axios from "axios";

const api = "https://localhost:7028/api/panel";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePanel(panelId) {
  return await axios({
    method: 'get',
    url: `${api}/${panelId}`,
    config: headers,
    withCredentials: true
  });
}

export async function getPanels() {
  return await axios({
    method: 'get',
    url: api, 
    config: headers,
    withCredentials: true
  });
}

export async function getUserPanels() {
  return await axios({
    method: 'get',
    url: `${api}/users`, 
    config: headers,
    withCredentials: true
  });
}

export async function addPanel(panel) {
  return await axios({
    method: 'post',
    url: `${api}`,
    data: {
      title: panel
    },
    config: headers,
    withCredentials: true
  })
}

export async function editPanel(panel) {
  return await axios({
    method: 'put',
    url: `${api}/${panel.id}`,
    data: panel,
    config: headers,
    withCredentials: true
  });
}

export async function deletePanel(panelId) {
  return await axios({
    method: 'delete',
    url: `${api}/${panelId}`,
    config: headers,
    withCredentials: true
  });
}