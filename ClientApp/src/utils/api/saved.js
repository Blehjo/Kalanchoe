import axios from "axios";

const api = "https://localhost:7028/api/savedcontrollers";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleSaved(savedId) {
  return await axios({
    method: 'get',
    url: `${api}/${savedId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getSaved() {
  return await axios({
    method: 'get',
    url: api,
    config: headers,
    withCredentials: true
  });
}

export async function getUserSaved() {
  return await axios({
    method: 'get',
    url: `${api}/user`,
    config: headers,
    withCredentials: true
  });
}

export async function addSaved(saved) {
  return await axios({
    method: 'post',
    url: api, 
    data: saved,
    config: headers,
    withCredentials: true
  });
}

export async function editSaved(saved) {
  return await axios({
    method: 'put',
    url:`${api}/${saved.id}`, 
    data: saved,
    config: headers,
    withCredentials: true
  });
}

export async function deleteSaved(savedId) {
  return await axios({
    method: 'delete',
    url: `${api}/${savedId}`,
    config: headers,
    withCredentials: true
  });
}