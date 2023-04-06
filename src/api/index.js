import axios from 'axios';

const url = 'https://techblog-api-m083.onrender.com/posts';

export const deletePost = (id) => axios.delete(`${url}/${id}`);