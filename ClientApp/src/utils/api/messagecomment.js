import axios from "axios";

const api = "https://localhost:7028/api/messagecomment"

export async function getSingleMessagecomment(messageId) {
  return await axios({
    method: 'get',
    url: `${api}/${messageId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function getMessagecomments() {
  return await axios({
    method: 'get',
    url: `${api}/`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
}

export async function addMessagecomment(messagecomment) {
  const { messageValue, messageId } = messagecomment;
  console.log("messagecomment: ", messagecomment)
  return await axios({
    method: 'post',
      url: api,
      data: {
        messageValue: messageValue,
        messageId: messageId
      },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
  });
}

export async function editMessagecomment(messagecomment) {
    return await axios({
        method: 'put',
        url: `/messagecomments/${messagecomment.id}`, 
        data: messagecomment,
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
}

export async function deleteMessagecomment(messagecommentId) {
    return await axios({ 
        method: 'delete',
        url: `/messagecomments/${messagecommentId}`,
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
}