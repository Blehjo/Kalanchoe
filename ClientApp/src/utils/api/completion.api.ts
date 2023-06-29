import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/chatgpt";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function callCompletion(request: any): Promise<any[]> {
  return await axios({
    method: 'post',
    url: `${api}/completion`,
    data: request,
    headers: headers,
    withCredentials: true
  });
}

export async function callDalle(request: any): Promise<any[]> {
  return await axios({
    method: 'post',
    url: `${api}/dalle`,
    data: request,
    headers: headers,
    withCredentials: true
  });
}

export async function callCode(request: any): Promise<any[]> {
  return await axios({
    method: 'post',
    url: `${api}/code`,
    data: request,
    headers: headers,
    withCredentials: true
  });
}