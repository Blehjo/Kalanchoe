import axios from "axios";
import { Member } from "../../store/member/member.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/member";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleMember(memberId: number): Promise<Member> {
  return await axios({
    method: 'get',
    url: `${api}/${memberId}`,
    headers: headers,
    withCredentials: true
  });
}

export async function getMembers(): Promise<Member[]>  {
  return await axios({
    method: 'get',
    url: api, 
    headers: headers,
    withCredentials: true
  });
}

export async function addMember(member: Member): Promise<Member[]>  {
  return await axios({
    method: 'post',
    url: api,
    data: member,
    headers: headers,
    withCredentials: true
  })
}

export async function editMember(member: Member): Promise<Member[]>  {
  return await axios({
    method: 'put',
    url: `${api}/${member.memberId}`,
    data: member,
    headers: headers,
    withCredentials: true
  });
}

export async function deleteMember(memberId: number): Promise<Member[]>  {
  return await axios({
    method: 'delete',
    url: `${api}/${memberId}`,
    headers: headers,
    withCredentials: true
  });
}