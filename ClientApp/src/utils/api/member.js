import axios from "axios";

const api = "https://kalanchoeai-server.azurewebsites.net/api/member";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleMember(memberId) {
  return await axios({
    method: 'get',
    url: `${api}/${memberId}`,
    config: headers,
    withCredentials: true
  });
}

export async function getMembers() {
  return await axios({
    method: 'get',
    url: api, 
    config: headers,
    withCredentials: true
  });
}

export async function getUserMembers() {
  return await axios({
    method: 'get',
    url: `${api}/users`, 
    config: headers,
    withCredentials: true
  });
}

export async function addMember(member) {
  return await axios({
    method: 'post',
    url: api,
    data: member,
    config: headers,
    withCredentials: true
  })
}

export async function editMember(member) {
  return await axios({
    method: 'put',
    url: `${api}/${member.id}`,
    data: member,
    config: headers,
    withCredentials: true
  });
}

export async function deleteMember(memberId) {
  return await axios({
    method: 'delete',
    url: `${api}/${memberId}`,
    config: headers,
    withCredentials: true
  });
}