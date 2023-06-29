import axios from "axios";
import { Panel } from "../../store/panel/panel.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/panel";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePanel(panelId: number): Promise<Panel> {
  return await axios({
    method: 'get',
    url: `${api}/${panelId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getPanels(): Promise<Panel[]> {
  return await axios({
    method: 'get',
    url: api, 
    headers: headers,
    withCredentials: true
  });
}

export async function getUserPanelsProfile(userId: number): Promise<Panel[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${userId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getUserPanels(): Promise<Panel[]> {
  return await axios({
    method: 'get',
    url: `${api}/users`, 
    headers: headers,
    withCredentials: true
  });
}

export async function addPanel(panel: Panel): Promise<Panel[]> {
  return await axios({
    method: 'post',
    url: api,
    data: panel,
    headers: headers,
    withCredentials: true
  })
}

export async function editPanel(panel: Panel): Promise<Panel[]> {
  return await axios({
    method: 'put',
    url: `${api}/${panel.panelId}`,
    data: panel,
    headers: headers,
    withCredentials: true
  });
}

export async function deletePanel(panelId: number): Promise<Panel[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${panelId}`,
    headers: headers,
    withCredentials: true
  });
}