import axios from "axios";

const uri = " http://localhost:3000";

async function fetchPosts() {
    const response = await axios.get(`${uri}/posts`);
    return response.data;
}

async function fetchPost(id) {
    const response = await axios.get(`${uri}/posts/${id}`);
    return response.data;
}

async function postPost(post) {
    return await axios.post(`${uri}/posts`, post);
}

export {fetchPosts, fetchPost, postPost};