import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSingleNote(noteId) {
  return await axios.get(`${api}/Note/${noteId}`, {
    config: headers,
    withCredentials: true
  })
}

export async function getNotes() {
  return await axios.get(`${api}/Note`, {
    config: headers,
    withCredentials: true
  });
}

export async function addNote(noteValue, panelId) {
  return await axios({
    method: 'post',
    url: `${api}/note`, 
    data: {
      noteValue: noteValue,
      panelId: panelId
    },
    config: headers,
    withCredentials: true
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
}

export async function editNote(note) {
  return await axios.put(`${api}/Note/${note.id}`, note, {
    config: headers,
    withCredentials: true
  });
}

export async function deleteNote(noteId) {
  return await axios.delete(`${api}/Note/${noteId}`, {
    config: headers,
    withCredentials: true
  });
}