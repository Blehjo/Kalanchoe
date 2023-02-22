import axios from "axios";

const api = "https://localhost:7028/api/note";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleNote(noteId) {
  return await axios({
    method: 'get',
    url: `${api}/${noteId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getPanelNotes(panelId) {
  return await axios({
    method: 'get',
    url: `${api}/user/${panelId}`,
    config: headers,
    withCredentials: true
  })
}

export async function getNotes() {
  return await axios({
    method: 'get',
    url: api,
    config: headers,
    withCredentials: true
  });
}

export async function addNote(noteValue, panelId) {
  return await axios({
    method: 'post',
    url: api, 
    data: {
      noteValue: noteValue,
      panelId: panelId
    },
    config: headers,
    withCredentials: true
  });
}

export async function editNote(note) {
  return await axios({
    method: 'put',
    url: `${api}/${note.id}`, 
    data: note, 
    config: headers,
    withCredentials: true
  });
}

export async function deleteNote(noteId) {
  return await axios({
    method: 'delete',
    url: `${api}/${noteId}`,
    config: headers,
    withCredentials: true
  });
}