import { BASE_URL } from './BASE_URL';

async function userPost(reqData) {
  try {
    const token = localStorage.getItem('token');
    const data = await fetch(BASE_URL + `/user/${'rudgus123'}/userpost`, {
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

export default userPost;
