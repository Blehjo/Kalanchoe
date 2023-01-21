import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleNote(noteId) {
  return await axios.get(`${api}/Note/${noteId}`)
}

export async function getNotes() {
  return await axios.get(`${api}/Note`)
}

export async function addNote(note) {
  return await axios.post(`${api}/Note`, note, {
    config: headers
  })
}

export async function editNote(note) {
  return await axios.put(`${api}/Note/${note.id}`, note, {
    config: headers
  })
}

export async function deleteNote(noteId) {
  return await axios.delete(`${api}/Note/${noteId}`)
}