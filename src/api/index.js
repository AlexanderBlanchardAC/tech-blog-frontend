import axios from 'axios';

const url = 'http://localhost:4500/posts';

export const deletePost = (id) => axios.delete(`${url}/${id}`);