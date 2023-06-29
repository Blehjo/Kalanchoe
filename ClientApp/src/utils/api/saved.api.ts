import axios from "axios";
import { Saved } from "../../store/saved/saved.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/savedcontrollers";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleSaved(savedId: number): Promise<Saved> {
  return await axios({
    method: 'get',
    url: `${api}/${savedId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getSaved(): Promise<Saved[]> {
  return await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
}

export async function getUserSaved(): Promise<Saved[]> {
  return await axios({
    method: 'get',
    url: `${api}/user`,
    headers: headers,
    withCredentials: true
  });
}

export async function addSaved(saved: Saved): Promise<Saved[]> {
  return await axios({
    method: 'post',
    url: api, 
    data: saved,
    headers: headers,
    withCredentials: true
  });
}

export async function editSaved(saved: Saved): Promise<Saved[]> {
  return await axios({
    method: 'put',
    url:`${api}/${saved.savedId}`, 
    data: saved,
    headers: headers,
    withCredentials: true
  });
}

export async function deleteSaved(savedId: number): Promise<Saved[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${savedId}`,
    headers: headers,
    withCredentials: true
  });
}