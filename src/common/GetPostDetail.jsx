import { BASE_URL } from './BASE_URL';

async function getPost(post_id) {
  try {
    const token = localStorage.getItem('token');
    const data = await fetch(BASE_URL + `/post/${post_id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getPost;
