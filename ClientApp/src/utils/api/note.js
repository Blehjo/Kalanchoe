import axios from "axios";

export async function getSingleNote(noteId) {
  return await axios.get(`/notes/${noteId}`)
}

export async function getNotes() {
  return await axios.get('/notes')
}

export async function addNote(note) {
  return await axios.note('/notes', note)
}

export async function editNote(note) {
  return await axios.put(`/notes/${note.id}`, note)
}

export async function deleteNote(noteId) {
  return await axios.delete(`/notes/${noteId}`)
}