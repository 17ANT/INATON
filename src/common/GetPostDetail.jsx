import { BASE_URL } from './BASE_URL';

async function getPost(post_id) {
  // console.log(BASE_URL);
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
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getPost;
