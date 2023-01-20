import axios from "axios";

export async function getSinglePost(postId) {
  return await axios.get(`/posts/${postId}`)
}

export async function getPosts() {
  return await axios.get('https://localhost:7028/api/Post')
  .then((response) => console.log("getPosts(): ", response.data));
}

export async function addPost(post) {
  const { postValue, mediaLink } = post;
  console.log("utils.addPost(): ", postValue);
  return await axios.post('https://localhost:7028/api/Post', {
    body: {
      postValue: postValue,
      mediaLink: mediaLink
    },
    config: { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    }}
  })
  .then((response) => console.log("addPost(): ", response));
}

export async function editPost(post) {
  return await axios.put(`/posts/${post.id}`, post)
}

export async function deletePost(postId) {
  return await axios.delete(`/posts/${postId}`)
}