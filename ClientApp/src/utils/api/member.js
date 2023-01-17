import axios from "axios";

export async function getSingleMember(memberId) {
  return await axios.get(`/members/${memberId}`)
}

export async function getMembers() {
  return await axios.get('/members')
}

export async function addMember(member) {
  return await axios.post('/members', member)
}

export async function editMember(member) {
  return await axios.put(`/members/${member.id}`, member)
}

export async function deleteMember(memberId) {
  return await axios.delete(`/members/${memberId}`)
}