import axios from "axios";
import { Note } from "../../store/note/note.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/note";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleNote(noteId: number): Promise<Note> {
  return await axios({
    method: 'get',
    url: `${api}/${noteId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getPanelNotes(panelId: number): Promise<Note[]> {
  return await axios({
    method: 'get',
    url: `${api}/user/${panelId}`,
    headers: headers,
    withCredentials: true
  })
}

export async function getNotes(): Promise<Note[]> {
  return await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
}

export async function addNote(note: Note): Promise<Note[]> {
  return await axios({
    method: 'post',
    url: api, 
    data: note,
    headers: headers,
    withCredentials: true
  });
}

export async function editNote(note: Note): Promise<Note[]> {
  return await axios({
    method: 'put',
    url: `${api}/${note.noteId}`, 
    data: note, 
    headers: headers,
    withCredentials: true
  });
}

export async function deleteNote(noteId: number): Promise<Note[]> {
  return await axios({
    method: 'delete',
    url: `${api}/${noteId}`,
    headers: headers,
    withCredentials: true
  });
}