import axios from "axios";
import { Note } from "../../store/note/note.types";

const api = "https://kalanchoeai-server.azurewebsites.net/api/note";

const headers = {
  'Accept': 'application/x-www-form-urlencoded',
  'Content-Type': 'application/x-www-form-urlencoded' 
}

export async function getSingleNote(memberId: number): Promise<Note> {
  const response = await axios({
    method: 'get',
    url: `${api}/${memberId}`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function getAllNotes(): Promise<Note[]> {
  const response = await axios({
    method: 'get',
    url: api,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function addNote(panelId: number, xCoord: number, yCoord: number, formData: FormData): Promise<Note[]> {
  const response = await axios({
    method: 'post',
    url: `${api}/${panelId}/${xCoord}/${yCoord}`,
    data: formData,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function editNote(noteId: number, xCoord: number, yCoord: number , formData: FormData, panelId: number): Promise<Note[]> {
  const response = await axios({
    method: 'put',
    url: `${api}/${noteId}/${panelId}/${xCoord}/${yCoord}`, 
    data: formData,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}

export async function deleteNote(memberId: number): Promise<Note[]> {
  const response = await axios({
    method: 'delete',
    url: `${api}/${memberId}`,
    headers: headers,
    withCredentials: true
  });
  const result = await response.data;
  return result;
}