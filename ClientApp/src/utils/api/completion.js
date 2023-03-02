import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/chatgpt";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function callCompletion(request) {
  return await axios({
    method: 'post',
    url: `${api}/completion`,
    data: request,
    config: headers,
    withCredentials: true
  });
}

export async function callDalle(request) {
  return await axios({
    method: 'post',
    url: `${api}/dalle`,
    data: request,
    config: headers,
    withCredentials: true
  });
}

export async function callCode(request) {
  return await axios({
    method: 'post',
    url: `${api}/code`,
    data: request,
    config: headers,
    withCredentials: true
  });
}